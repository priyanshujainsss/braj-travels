import { VehicleImage } from "./types";

/**
 * Vehicle imagery.
 *
 * These are generic, non-branded representative photos (not photos of the
 * actual Braj Travels vehicle) used until real photographs are supplied.
 * Replace the files in /public/images/vehicle/ and update the `alt` text
 * below — no component changes are required. See README.md → "Replacing
 * vehicle images".
 */
export const vehicleImages: VehicleImage[] = [
  {
    src: "/images/vehicle/car-hero.webp",
    alt: "Private AC car used for Braj Travels taxi and tour bookings from Govardhan",
    type: "hero",
  },
  {
    src: "/images/vehicle/car-front.webp",
    alt: "Front view of the private AC car used for taxi travel",
    type: "front",
  },
  {
    src: "/images/vehicle/car-side.webp",
    alt: "Side view of the private AC car used for outstation and local trips",
    type: "side",
  },
  {
    src: "/images/vehicle/car-rear.webp",
    alt: "Rear view of the private AC car used for outstation and local trips",
    type: "rear",
  },
  {
    src: "/images/vehicle/car-interior.webp",
    alt: "Interior of the private car for comfortable family travel",
    type: "interior",
  },
  {
    src: "/images/vehicle/car-luggage.webp",
    alt: "Luggage space in the private car, suitable for outstation trips",
    type: "luggage",
  },
];

export const vehicleFeatures: string[] = [
  "Air-conditioned cabin",
  "Driver included in every booking",
  "Complete private-car booking — not shared or self-drive",
  "GPS-tracked vehicle",
  "Comfortable for families and small groups",
  "Flexible travel plans and stops",
  "Adequate luggage space for outstation trips",
] as const;

export const vehicleName = "Our Vehicle";
export const vehicleDescriptor = "Comfortable AC Car with Driver";
