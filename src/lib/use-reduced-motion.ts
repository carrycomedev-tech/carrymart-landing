"use client";

import { useEffect, useState } from "react";

/**
 * Tracks `prefers-reduced-motion`. Components that hide content behind an
 * animation use this to skip the effect instead of leaving it invisible, and
 * autoplaying media uses it to stay still.
 */
export const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
};
