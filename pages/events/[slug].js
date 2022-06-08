import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import {API_URL} from '@/config/index'

export default function EventPage({ evt }) {
  const deleteEvent = e => {
    console.log('delete');
  }
  return (
  <Layout>
  <div className="relative shadow-2xl">
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        {evt.image && (
          <img
          className="w-full h-full object-cover"
          src={evt.image}
          alt="Event image"
        />
        )}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider">{evt.date} @ {evt.time}</h2>
          <p className="mt-2 text-white text-3xl font-extrabold text-purple tracking-tight sm:text-4xl">{evt.name}</p>
          <p className='text-base font-semibold uppercase tracking-wider py-4'>venue: {evt.venue}
          <br />
          {evt.address}
          </p>
          <p className="mt-3 text-lg text-gray-300">
         {evt.description}
          </p>
          <div className="mt-8 space-x-4">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-purple text-base font-medium rounded-md"
              >
               Edit Event
              </a>
            </div>
            <div className="inline-flex rounded-md shadow">
              <a
                className="inline-flex items-center justify-center px-5 py-3 border border-purple text-base font-medium rounded-md"
                href="#"
                onClick={deleteEvent}
              >
               Delete Event
              </a>
            </div>
            <Link href="/events">
              <a className='inline-block'>
              {'<<'} Back to All Events
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
</Layout>
  )
}
export async function getServerSideProps({ query: 
  { slug }}) {
    const res = await fetch(`${API_URL}/api/events/${slug}`)
    const events = await res.json()
  return {
      props: {
        evt: events[0]
      },
    }
  }

