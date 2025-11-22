// components/contact/ContactMap.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

// Fix Leaflet icon issue in Next.js
const customIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function ContactMap() {
  useEffect(() => {
    // Fix Leaflet CSS not loading properly in Next.js
    import("leaflet");
  }, []);

  const position: [number, number] = [6.4298, 3.4321]; // Lekki Phase 1 coords

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <h2 className="text-center font-kapital text-5xl lg:text-6xl mb-12">
          Find Us in <span className="text-[#A9802C]">Lekki</span>
        </h2>

        <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <MapContainer
            center={position}
            zoom={16}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={true}
          >
            {/* Default View */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {/* Satellite View (Switchable) */}
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="&copy; Esri"
              className="hidden"
              eventHandlers={{
                add: (e) => e.target.getContainer().classList.add("satellite"),
              }}
            />

            <Marker position={position} icon={customIcon}>
              <Popup>
                <div className="text-center">
                  <p className="font-bold">ASHR Group HQ</p>
                  <p className="text-sm">Lekki Phase 1, Lagos</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>

          {/* Toggle Button */}
          <button
            onClick={() => {
              document
                .querySelector(".leaflet-container")
                ?.classList.toggle("satellite");
            }}
            className="absolute top-4 right-4 z-10 px-5 py-3 bg-white/90 backdrop-blur rounded-xl shadow-lg hover:bg-[#A9802C] hover:text-white transition-all duration-300 font-medium text-sm"
          >
            Toggle Satellite View
          </button>
        </div>
      </div>
    </section>
  );
}
