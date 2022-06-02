import Head from "next/head";
import {useRouter} from "next/router";
import Showcase from "./Showcase";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({title, keywords, description, children}) {
  const router = useRouter()
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description}/>
      <meta name='keywords' content={keywords}/>
    </Head>
    <Header />
    {router.pathname === '/' && <Showcase />}
    {children}
    <Footer />
    </>
  );
}

Layout.defaultProps = {
    title: 'Parasol | Find the perfect place to meditate',
    description: 'Search for meditation events near you',
    keywords: 'meditation, Buddhism, peace, mindfulness'
}
