import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import {API_URL} from '@/config/index'

export default function EventPage({ evt }) {
      
  return (
    <Layout>
 <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="font-tiro-kannada block xl:inline">{evt.name}</span>{' '}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="w-full rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-desert-storm bg-purple hover:bg-desert-storm hover:text-purple md:py-4 md:text-lg md:px-10"
                >
                 Sign Up
                </a>
              </div>
              <Link href={`/events/edit/${evt.id}`} className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-desert-storm hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                     <i className="fa-solid fa-pen-to-square"></i>
                  Edit
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </main>
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

