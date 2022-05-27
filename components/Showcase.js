import Image from "next/image"

export default function Showcase() {
  return (
    <div>
        <div className="max-w-7xl mx-auto">
            <h1 className="font-tiro-devanagari-hindi text-4xl sm:text-5xl  text-center md:text-left md:text-5xl my-10 text-purple">
                Your First Step Starts Here.
            </h1>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 md:my-60 ">
            <Image
            src="/static/hero-3-bg.svg"
            alt="Main Image"
            width={600}
            height={400}
            />
        </div>
        </div>
    </ div>
  )
}
