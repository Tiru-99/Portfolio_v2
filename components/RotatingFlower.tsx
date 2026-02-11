import Image from "next/image";

export default function FlowerSection() {
  return (
    <div className="relative w-[300px] h-[300px] overflow-hidden">
      {/* 🌸 Flower */}
      <Image
        src="/assets/metallic-flower.png"
        alt="Metallic Flower"
        fill
        className="object-contain translate-y-[40%]"
        priority
      />

      {/* 🌫 Bottom 30% Overlay */}
      <div className="absolute z-10 bottom-0 left-0 right-0 h-[100%] bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 text-[13px] text-neutral-400 font-hanken tracking-wider"
      >
        MYSKILLS
      </div>
    </div>
  );
}
