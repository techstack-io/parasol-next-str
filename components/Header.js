import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-desert-storm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
        <Link href='/'>
            <a><Image
                src="/static/logo-1-img.svg"
                alt="Logo"
                width={100}
                height={100}
               /></a>
        </Link>
        <Link href='/events' className='z-100'>
            <a>Events</a>
        </Link>
        </div>
    </nav>
    </header>
  )
}
