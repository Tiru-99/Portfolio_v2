"use client";

import Image from "next/image";
import TechIcons from "./TechIcons";
import FlowerSection from "./RotatingFlower";
export default function Stack() {
  return (
    <section className="flex flex-col -mt-16 items-center justify-center overflow-hidden">
      <FlowerSection/>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-5xl font-instrument text-white">
          The Secret{" "}
          <span className="italic bg-gradient-to-r from-pink-500 p-1 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Sauce
          </span>
        </h2>

        <TechIcons />
      </div>
    </section>
  );
}
