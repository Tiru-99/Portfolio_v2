import { MapPin, Briefcase } from "lucide-react";
import TechTag from "./TechBadge";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="work" className="mt-20 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=" text-center pb-8 border-b  border-white/20"
      >
        <p className="text-white/50 text-xs">THE EXPERIENCE</p>
        <div className="text-4xl font-instrument">
          <div>Experience That</div>
          <div>
            brings
            <span className="italic p-1
               bg-linear-to-r from-pink-500 via-purple-500 to-blue-500
               bg-clip-text text-transparent animate-gradient">
              Ideas to Life
            </span>
          </div>
        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row border-b border-white/20"
      >
        {/* Company section */}
        <div className="md:flex-1 md:border-r  border-white/20 px-8 pt-10">
          <p className="text-white/50 text-xs">OCT 2024 - JAN 2025</p>

          <div className="flex items-center gap-3 mt-4 hover:cursor-pointer">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/assets/experience/urbantap.jpeg"
              className="h-10 w-10 rounded-md"
              alt="Company logo"
            />
            <p className="text-2xl font-instrument">Urbantap</p>
          </div>

          <div className="flex items-center mt-4 gap-1">
            <MapPin className="h-3 w-3 text-white/50" />
            <p className="text-xs text-white/50">Dubai, UAE</p>
          </div>

          <div className="flex items-center mt-1 gap-1">
            <Briefcase className="h-3 w-3 text-white/50" />
            <p className="text-xs text-white/50">Remote</p>
          </div>
        </div>

        {/* Right section */}
        <div className="md:flex-2 px-6 md:px-20 py-8">
          {/* Role */}
          <h2 className="text-md font-semibold text-white tracking-wide font-hanken">
            Full Stack Developer Intern
          </h2>


          {/* Description */}
          <ul className="mt-4 space-y-1 text-sm text-white/50 list-disc font-hanken">
            <li>
              Implemented <span className="text-white">Redis-based caching strategies</span>, achieving 
              <span className="text-white"> 50% faster API response times</span> and significantly reducing 
              <span className="text-white"> database I/O bottlenecks</span>.
            </li>
          
            <li>
              Architected <span className="text-white">critical backend workflows</span> for a LinkedIn-style broker platform using 
              <span className="text-white"> Node.js, TypeScript, and PostgreSQL</span>, with strong emphasis on 
              <span className="text-white"> performance, modularity, and scalability</span>.
            </li>
          
            <li>
              Spearheaded the <span className="text-white">end-to-end architecture and deployment</span> of a 
              <span className="text-white">production-ready car dealership platform</span>, owning 
              <span className="text-white">data logic, schema design, and API orchestration</span> using a BaaS-driven approach.
            </li>
          
            <li>
              Shipped multiple <span className="text-white">high-performance UI platforms</span> with clean UI/UX, 
              serving <span className="text-white">200+ daily active visitors</span> in production.
            </li>
          </ul>

          {/*todo use map here */}
          <div className="flex flex-wrap gap-2 mt-3">
            <TechTag name="React" logo="/assets/tech/React.svg" />
            <TechTag name="Next.js" logo="/assets/tech/Nextjs.png" />
            <TechTag name="TypeScript" logo="/assets/tech/TypeScript.svg" />
            <TechTag name="PostgreSQL" logo="/assets/tech/PostgresSQL.svg" />
            <TechTag name="Redis" logo="/assets/tech/Redis.svg" />
            <TechTag name="Express" logo="/assets/tech/Express.svg" />
            <TechTag name="Bun" logo="/assets/tech/Bun.svg" />
            <TechTag name="AWS" logo="/assets/tech/AWS.png" />
            <TechTag name="Postman" logo="/assets/tech/Postman.svg" />
            <TechTag name="Github" logo="/assets/tech/GitHub.svg" />
            <TechTag name="Appwrite" logo="/assets/tech/Appwrite.svg" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
