import Image from "next/image"

export default function Showcase() {
  return (
    <div className="overflow-visible">
        <div className="max-w-7xl mx-auto">
            <h1 className="font-libre-bodoni text-center uppercase text-4xl sm:text-5xl md:text-6xl my-10 text-purple">
                Time to Meditate!
            </h1>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
            src="/static/hero-1-img.svg"
            alt="Main Image"
            width={600}
            height={500}
            />
        </div>
        </div>
    </ div>
  )
}
