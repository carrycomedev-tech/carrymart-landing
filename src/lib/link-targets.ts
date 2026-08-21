/**
 * Reads the public API for the three things a shared CarryMart link can point
 * at: a profile (`/@handle`), a listing (`/l/{id}`) and a post (`/p/{id}`).
 *
 * These pages exist because a deep link has two audiences. Someone with the app
 * installed never sees them — iOS and Android hand the URL to the app before a
 * browser is involved (that is what `/.well-known/*` buys us, see
 * `@/lib/app-links`). Everyone else lands here: the friend it was forwarded to,
 * the person reading it on a desktop, the crawler building a link preview. Until
 * now all three got a 404, which made every shared link look broken to exactly
 * the people it was meant to recruit.
 *
 * Only endpoints the API marks `[AllowAnonymous]` are used, so no credential is
 * involved and the payload is the same one an app user sees before signing in —
 * notably never a seller's phone number.
 */

/**
 * The API host stays `carrycomegh.com` on purpose: shipped app builds pin it and
 * stored media URLs are absolute against `media.carrycomegh.com`. The rebrand
 * moved the *website* to carrymartgh.com, not the backend.
 */
const API_BASE_URL = "https://api.carrycomegh.com";

/** Every API response is wrapped in this envelope (`ApiResponse<T>` server-side). */
type ApiEnvelope<T> = { success: boolean; data: T | null; message: string | null };

export type LinkPerson = {
  id: string;
  username: string | null;
  name: string | null;
  profilePhotoUrl: string | null;
  isVerified: boolean;
};

export type LinkProfile = LinkPerson & {
  bio: string | null;
  isMerchant: boolean;
  stats: { following: number; followers: number; likes: number };
};

export type LinkListing = {
  id: string;
  title: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
  status: string;
  soldAt: string | null;
  interested: number;
  category: string;
  condition: string;
  location: { name: string | null } | null;
  seller: LinkPerson;
};

export type LinkPost = {
  id: string;
  kind: string;
  caption: string | null;
  media: { url: string; thumbUrl: string | null }[];
  author: LinkPerson;
  likeCount: number;
  commentCount: number;
  listing: { id: string; title: string; price: number } | null;
};

/**
 * A missing or unreachable target is a rendering decision, not an exception:
 * the page still renders (with the generic "get the app" copy) rather than
 * 500-ing, because a share link that shows *something* beats one that errors.
 * Callers distinguish the two by the `null`.
 *
 * `revalidate` keeps a viral link from turning every forward into an API hit
 * while still picking up an edited price within a few minutes.
 */
async function apiGet<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const body = (await res.json()) as ApiEnvelope<T>;
    return body.success ? body.data : null;
  } catch {
    return null;
  }
}

/** Usernames are `[a-z0-9_]`, 3–20 chars — the same rule the app and API enforce. */
export const USERNAME_PATTERN = /^[a-z0-9_]{3,20}$/;

/** Listing and post ids are GUIDs. Anything else is a 404, not an API call. */
export const GUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const getProfile = (username: string) =>
  apiGet<LinkProfile>(`/api/users/by-username/${encodeURIComponent(username)}`);

export const getListing = (id: string) => apiGet<LinkListing>(`/api/listings/${id}`);

export const getPost = (id: string) => apiGet<LinkPost>(`/api/posts/${id}`);

/** GH₵ 1,250 — the app's own formatting, so a preview reads like the listing does. */
export const formatCedis = (price: number) =>
  `GH₵ ${price.toLocaleString("en-GH", {
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
