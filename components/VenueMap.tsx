"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function VenueMap() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import Leaflet
    const initMap = async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      if (!mapContainer.current) return;

      // Clear existing map if any
      if (mapContainer.current.children.length > 0) {
        mapContainer.current.innerHTML = "";
      }

      // Create map - using Kerala as default location
      const map = L.map(mapContainer.current).setView([10.8505, 76.2711], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Add a marker for the venue
      const marker = L.marker([10.8505, 76.2711], {
        icon: L.icon({
          iconUrl:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23BFA789' width='32' height='32'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'/%3E%3C/svg%3E",
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        }),
      }).addTo(map);

      marker.bindPopup(
        '<div style="font-family: sans-serif; padding: 8px;"><strong>Wedding Venue</strong><br/>Location Details</div>',
        {
          maxWidth: 300,
        }
      );

      // Adjust map on window resize
      const handleResize = () => {
        setTimeout(() => {
          map.invalidateSize();
        }, 100);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        map.remove();
      };
    };

    initMap().catch(console.error);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20"
    >
      <div
        ref={mapContainer}
        className="w-full h-full"
        style={{ position: "relative" }}
      />
    </motion.div>
  );
}
