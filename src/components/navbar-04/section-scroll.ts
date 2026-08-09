/**
 * Smooth-scrolls to a "/#section" target using the same offset the CSS anchor
 * targets use, so JS and CSS can't drift apart. Shared by the header nav and
 * the mobile sheet.
 */
export const scrollToSection = (targetId: string) => {
  const elem = document.getElementById(targetId);
  if (!elem) return;

  const offset =
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--nav-scroll-offset"
      ),
      10
    ) || 88;
  const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: targetId === "hero" ? 0 : elementPosition - offset,
    behavior: "smooth",
  });
};

/**
 * The sheet locks body scroll while open, which swallows a smooth scroll
 * started on the same tick. Matches the sheet's close animation duration.
 */
export const SHEET_CLOSE_MS = 320;
