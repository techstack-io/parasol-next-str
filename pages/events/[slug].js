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
  <div className="relative bg-gray-800">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">{evt.date} @ {evt.time}</h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">{evt.name}</p>
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
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-purple text-base font-medium rounded-md"
              >
               Delete Event
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="overflow-hidden shadow rounded-lg">
      <div className="max-w-7xl mx-auto px-8 py-20 sm:px-6 lg:px-8">
        <div>
           {evt.date} @ {evt.time}
        </div>
        <h2 className="text-md font-bold leading-7 sm:text-3xl sm:truncate py-2">{evt.name}</h2>
        <h3>Presented by: {evt.performers}</h3>
          <p>Description: {evt.description}</p>
    </div>
    </div>
  <div className="max-w-7xl mx-auto py-20 sm:px-6 lg:px-8">
    <div>
      <div className="md:flex md:items-center md:justify-between p-5">
        <div className="flex-1 min-w-0">
        {evt.date} @ {evt.time}
          <h2 className="text-md font-bold leading-7 sm:text-3xl sm:truncate py-2">{evt.name}</h2>
          <span className='whitespace-pre-line'>
          <h3>Presented by: {evt.performers}</h3>
          <p>Description: {evt.description}</p>
          </span>
        </div>
        <div className="flex md:mt-2 md:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 bg-desert-storm shadow-sm text-sm font-medium text-purple"
          >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Edit Event
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium bg-desert-storm text-blaze "
          >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Delete Event
            <a
              href="#"
              onClick={deleteEvent}
            >
            </a>
          </button>
        </div>
      </div>
    </div>
    <figure>
            <img
              className="w-50 py-6 rounded-lg"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
          </figure>
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

