"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

// ──────────────────────────────────────────────
// CONFIG — Google Maps embed URL (points to ASHR DESIGNS address)
// ──────────────────────────────────────────────
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1897.1758430144246!2d3.473065694535149!3d6.431244702218526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf50f7e4c8c5f%3A0xfad4a940c18cd42b!2sASHR%20DESIGNS!5e1!3m2!1sen!2sng!4v1792507997233!5m2!1sen!2sng";

// Display name for UI (ASHR GROUP is the parent company; ASHR DESIGNS is the HQ subsidiary)
const DISPLAY_NAME = "ASHR GROUP";

export function ContactMap() {
  // ──────────────────────────────────────────────
  // STATE — frameKey forces iframe remount on click
  // ──────────────────────────────────────────────
  const [frameKey, setFrameKey] = useState(0);

  return (
    <div className="relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
      {/* MAP WRAPPER — fixed height, clipped overflow */}
      <div className="relative h-full w-full overflow-hidden">
        {/* IFRAME — key changes on "Find us" click to reset map */}
        <iframe
          key={frameKey}
          src={MAP_EMBED_SRC}
          title={`Map showing ${DISPLAY_NAME} headquarters`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-full w-full border-0"
        />

        {/* FIND US BUTTON — top-right, solid white chip */}
        <button
          type="button"
          onClick={() => setFrameKey((key) => key + 1)}
          title={`Reset the map back to ${DISPLAY_NAME} headquarters`}
          className="absolute top-4 right-4 z-10 inline-flex items-center gap-2 rounded-sm border border-border bg-white px-4 py-2 font-poppins text-xs font-medium uppercase tracking-[0.14em] text-foreground shadow-lg transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
        >
          <MapPin size={14} strokeWidth={1.5} aria-hidden="true" />
          Find us
        </button>
      </div>
    </div>
  );
}