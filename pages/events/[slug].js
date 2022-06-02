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
  <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">{evt.name}</h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
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

