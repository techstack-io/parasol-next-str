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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi:ital@1&family=Tiro+Kannada&display=swap" rel="stylesheet" />
      <script src="https://kit.fontawesome.com/4cdcba7205.js" crossorigin="anonymous"></script>
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
