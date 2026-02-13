interface TechTagProps {
  name: string
  logo: string
}

export default function TechTag({ name, logo }: TechTagProps) {
  return (
    <div
      className="
        inline-flex items-center gap-1.5
        px-2 py-1
        rounded-md
        border border-white/8
        text-white/80
        bg-white/7
        leading-none
        border-t-white/25
        hover:cursor-pointer
      "
    >
      <img
        src={logo}
        alt={name}
        className="h-3 w-3 object-contain block"
      />
      <span className="text-xs leading-none">
        {name}
      </span>
    </div>
  )
}
