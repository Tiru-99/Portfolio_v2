import RotatingFlower from "./RotatingFlower";
import TechIcons from "./TechIcons";

export default function Stack() {
  return (
    <section className="flex justify-center">
      <div className="relative w-[320px] md:w-full h-[650px] md:h-[600px] overflow-hidden">
        
        {/* Background: Rotating Flower */}
        <RotatingFlower />

        {/* Foreground: Gradient Overlay + Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent" />
          
          {/* Content Container */}
          <div className="relative z-30 flex flex-col items-center text-center -mt-10 md:-mt-16">
            
            {/* Subtitle */}
            <span className="text-[13px] text-neutral-400 font-hanken tracking-wider">
              MY SKILLS
            </span>

            {/* Title */}
            <h2 className="text-2xl md:text-5xl font-instrument text-white mt-2">
              The Secret{" "}
              <span className="italic bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Sauce
              </span>
            </h2>

            {/* Tech Icons Grid */}
            <div className="mt-10">
              <TechIcons />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
