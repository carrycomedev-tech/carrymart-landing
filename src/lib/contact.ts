/** Single source of truth for contact details shown on the site and in schema. */
export const SUPPORT_EMAIL = "support@carrymartgh.com";
export const SUPPORT_PHONE = "+233 50 952 1390";
export const SUPPORT_PHONE_HREF = "+233509521390";
/**
 * Clicking the address hands off to whatever mail app the device has set as its
 * handler, with the subject already filled so support enquiries are sorted on
 * arrival. Only the subject is prefilled: a canned body just gets deleted.
 */
export const SUPPORT_EMAIL_HREF = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  "CarryMart support"
)}`;

/**
 * The support number is a WhatsApp Business line, so the footer opens a chat
 * rather than dialling: wa.me takes the digits with no "+" or spaces, and hands
 * off to the app on mobile and web.whatsapp.com on desktop. The prefilled text
 * is what lands in the composer, so support can tell site enquiries apart from
 * the rest of the inbox.
 */
export const SUPPORT_WHATSAPP_HREF = `https://wa.me/${SUPPORT_PHONE_HREF.replace(
  "+",
  ""
)}?text=${encodeURIComponent("Hi CarryMart, I have a question.")}`;

export const SITE_URL = "https://www.carrymartgh.com";
