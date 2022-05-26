import Link from 'next/link'
import Image from 'next/image'

export default function EventItem({ evt }) {
  return (
    <>
    <div className="flex flex-col p-4 md:flex-row md:max-w-xl">
        <ul role="list" className='mb-0'>
          <li>
          <span className="text-sm">
             {evt.date} @ {evt.time}
          </span>
          </li>
          <li>
            <div className='relative pb-2 font-bold text-purple'>
            {evt.name}
            </div>
          </li>
          <li>
          <button
              type="button"
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full shadow-lg text-desert-storm bg-purple hover:bg-silver hover:text-purple"
           >
           <a href={`/events/${evt.slug}`}>
            Details
          </a>
          </button>
          </li>
        </ul>
    </div>
    <br />
    {/* <Image
    className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
    src={evt.image ? evt.image : "/images/event-img-1.jpg"}
    width={200} 
    height={200}
    alt="Event image" 
    /> */}
    </>
  );
}
