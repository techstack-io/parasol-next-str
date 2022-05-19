import Layout from "@/components/Layout"
import Header from "@/components/Header"
import {API_URL} from '@/config/index'

export default function HomePage({events}) {
  return (
  <Layout>
    <div className="max-w-7xl mx-auto">
      <h4 className="font-libre-bodoni  text-xl sm:text-xl  text-center md:text-left md:text-3xl my-10 text-purple">
        upcoming events
      </h4>
    </div>
  </Layout>
  )
}

export async function getStaticProps () {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props:  {events},
    revalidate: 1,
  }
}
