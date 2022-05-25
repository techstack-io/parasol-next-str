import Link from 'next/link'
import Image from 'next/image'

export default function EventItem({ evt }) {
  return (
    <>
    <div className="flex flex-col border border-silver rounded-2xl p-4 md:flex-row md:max-w-xl">
    {/* <Image
    className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
    src={evt.image ? evt.image : "/images/event-img-1.jpg"}
    width={200} 
    height={200}
    alt="Event image" 
    /> */}
    <div className="flex flex-col p-4">
    <span>
      {evt.date} @ {evt.time}
    </span>
        <h5 className="mb-2 text-lg font-bold text-purple dark:text-white">{evt.name}</h5>
        <p className="mb-3 font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <div>
          <a
            href={`/events/${evt.slug}`}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-desert-storm"
          >
          Details
          </a>
      </div>
    </div>
</div>
<br />
    </>
  );
}
