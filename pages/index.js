import Layout from "@/components/Layout"
import Header from "@/components/Header"
import Link from "next/link"
import {API_URL} from '@/config/index'
import EventItem from "@/components/EventItem"

export default function HomePage({events}) {
  return (
  <Layout>
    <div className="max-w-7xl mx-auto">
      <h4 className="font-libre-bodoni  text-xl sm:text-xl  text-center md:text-left md:text-3xl my-10 text-purple italic">
        upcoming events
      </h4>
      {/* Check if there are events */}
      {events.length === 0 && <h3>There are no events to show.</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {events.length > 0 && (
        <Link href ='/events'>
          <a>View All Events</a>
        </Link>
      )}
    </div>

  </Layout>
  )
}

export async function getStaticProps () {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props:  { events:events.slice(0, 3)},
    // revalidate acts as getServerSideProps
    revalidate: 1,
  }
}
