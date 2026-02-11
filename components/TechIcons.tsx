"use client"
const techIcons = [
  "/assets/tech/TypeScript.svg",
  "/assets/tech/Appwrite.svg",
  "/assets/tech/Postman.svg",
  "/assets/tech/PostgresSQL.svg",
  "/assets/tech/GitHub.png",
  "/assets/tech/AWS.png",
  "/assets/tech/Express.png",
  "/assets/tech/React.svg",
  "/assets/tech/Bun.svg",
  "/assets/tech/nextjs.png",
  "/assets/tech/Redis.svg",
  "/assets/tech/kafka.png",
  "/assets/tech/bash.png",
  "/assets/tech/C++ (CPlusPlus).svg",
  "/assets/tech/Docker.svg",
  "/assets/tech/Elastic Search.svg",
  "/assets/tech/Git.svg",
  "/assets/tech/GitHub Actions.svg",
  "/assets/tech/Grafana.svg",
  "/assets/tech/Kubernetes.svg",
  "/assets/tech/Linux.svg",
  "/assets/tech/MongoDB.svg",
  "/assets/tech/Prometheus.svg",
  "/assets/tech/Python.svg",
  "/assets/tech/debeziumio-icon (1).svg",
];

export default function TechIcons() {
  return (
    <div className="flex justify-center max-w-xl mt-8">
      <div className="flex flex-wrap justify-center gap-2 max-w-full">
        {techIcons.map((src) => (
          <div
            key={src}
            className="
              rounded-xl
              bg-[#232323]
              border border-white/8
              border-t-white/20
              p-2
            "
          >
            <img
              src={src}
              alt=""
              className="w-8 h-8 transition"
            />
          </div>
        ))}
      </div>
    </div>
  )
}