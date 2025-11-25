"use client";

import { Icon, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, useMap } from "react-leaflet";
import { MapPin } from "lucide-react";
import L from "leaflet";

// Custom marker icon
const customIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -35],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

// Custom red marker for featured location
const redMarkerIcon = new Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconSize: [32, 50],
  iconAnchor: [16, 40],
  popupAnchor: [0, -35],
});

// Home button control
function HomeButtonControl({ position }: { position: LatLngExpression }) {
  const map = useMap();

  useEffect(() => {
    const control = (L.control as any)({
      position: "bottomright",
    }) as L.Control;

    control.onAdd = () => {
      const container = L.DomUtil.create("div") as HTMLDivElement;
      container.className = "leaflet-control";
      container.innerHTML = `
        <button id="home-btn" class="home-button" title="Return to marker">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </button>
      `;

      const btn = container.querySelector("#home-btn") as HTMLElement | null;
      btn?.addEventListener("click", () => {
        map.setView(position, 16, { animate: true, duration: 0.5 });
      });

      L.DomEvent.disableClickPropagation(container);
      return container;
    };

    control.addTo(map);
    return () => {
      map.removeControl(control);
    };
  }, [map, position]);

  return null;
}

// Layer control component with thumbnail switcher
function MapLayerControl() {
  const map = useMap();
  const layerControlRef = useRef<L.Control | null>(null);

  useEffect(() => {
    // Use Cyclosm tile for more street/cycle detail
    const osmLayer = L.tileLayer(
      "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
      {
        attribution: "&copy; OpenStreetMap contributors, Cyclosm",
      },
    );

    const satelliteLayer = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "&copy; Esri",
      },
    );

    // More detailed label overlay for satellite (better street/place labels)
    const satelliteLabels = L.tileLayer(
      "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "&copy; Esri",
        opacity: 0.9,
        zIndex: 999,
      },
    );

    // Add OSM by default
    osmLayer.addTo(map);

    // Layer group for satellite + labels
    const satelliteGroup = L.layerGroup([satelliteLayer, satelliteLabels]);

    // Create custom layer control with thumbnails
    const control = (L.control as any)({ position: "topright" }) as L.Control;

    control.onAdd = () => {
      const container = L.DomUtil.create(
        "div",
        "leaflet-control leaflet-bar layer-switcher",
      ) as HTMLDivElement;
      container.innerHTML = `
        <div class="layer-thumbnails">
          <button class="layer-btn active" data-layer="map" title="Street Map">
            <img src="https://tile.openstreetmap.org/8/131/85.png" alt="Map" class="thumbnail-image" />
          </button>
          <button class="layer-btn" data-layer="satellite" title="Satellite">
            <img src="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/8/85/131" alt="Satellite" class="thumbnail-image" />
          </button>
        </div>
      `;

      const buttons = container.querySelectorAll(".layer-btn");
      buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const layer = (e.currentTarget as HTMLElement).dataset.layer;

          buttons.forEach((b) => b.classList.remove("active"));
          (e.currentTarget as HTMLElement).classList.add("active");

          if (layer === "satellite") {
            map.removeLayer(osmLayer);
            satelliteGroup.addTo(map);
          } else {
            map.removeLayer(satelliteGroup);
            osmLayer.addTo(map);
          }
        });
      });

      L.DomEvent.disableClickPropagation(container);
      return container;
    };

    control.addTo(map);
    layerControlRef.current = control;

    return () => {
      map.removeControl(control);
    };
  }, [map]);

  return null;
}

// Custom popup component
function CustomPopup({ name, location }: { name: string; location: string }) {
  return (
    <div className="w-64 cursor-default rounded-lg bg-white p-4 text-gray-900 shadow-lg">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex-shrink-0">
          <MapPin className="text-gold size-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{location}</p>
          <a
            href="https://www.google.com/maps/@6.657931,3.130581,6967m/data=!3m1!1e3?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium text-blue-500 hover:text-blue-600"
          >
            Open Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ContactMap() {
  const position: LatLngExpression = [6.4308568, 3.4743398]; // Lekki Phase 1

  useEffect(() => {
    // Fix Leaflet icon paths in Next.js
    delete (Icon.Default.prototype as any)._getIconUrl;
    Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
        className="leaflet-container"
      >
        <MapLayerControl />
        <HomeButtonControl position={position} />

        <Marker position={position} icon={redMarkerIcon}>
          <Popup
            className="custom-popup"
            closeButton={false}
            autoPan={true}
            maxWidth={300}
          >
            <CustomPopup
              name="ASHR Group HQ"
              location="Lekki Phase 1, Lagos, Nigeria"
            />
          </Popup>
        </Marker>
      </MapContainer>

      <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
        <p className="rounded-full bg-black/30 px-4 py-2 text-xs tracking-wider text-white/60 backdrop-blur">
          Use satellite toggle to switch views
        </p>
      </div>
    </div>
  );
}
