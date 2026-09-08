import Image from "next/image";
import { VehicleImage } from "@/data/types";

export function VehicleGallery({ images }: { images: VehicleImage[] }) {
  const [main, ...rest] = images;

  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        <Image
          src={main.src}
          alt={main.alt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
      </div>
      {rest.length > 0 && (
        <div className="mt-3 grid grid-cols-3 gap-3">
          {rest.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-md"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="180px"
                loading="lazy"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
