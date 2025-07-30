"use client";

import { useEffect } from "react";
import L from "leaflet";
import "./style.css";

type Input = {
  lat: number;
  lng: number;
  className?: string;
};

export default function Map({ lat, lng, className }: Input) {
  const randomNumber = Math.floor(Math.random() * 100000);
  useEffect(() => {
    const map = L.map(`map_${randomNumber}`).setView([lat, lng], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "",
    }).addTo(map);

    L.marker([lat, lng]).addTo(map);

    const nav = document.querySelector(`.leaflet-control-attribution`);
    if (nav) nav.remove();

    return () => {
      map.remove();
    };
  }, [lat, lng]);

  return <div id={`map_${randomNumber}`} className={className} />;
}
