import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// utils/scrollTo.ts
export function scrollToSection(id: string) {
  if (!id) return;

  // Auto-add # if missing
  const selector = id.startsWith("#") ? id : `#${id}`;

  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`No element found for selector: ${selector}`); // Optional debug
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
