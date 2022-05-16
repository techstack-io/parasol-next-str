import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({title, keywords, description, children}) {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description}/>
      <meta name='keywords' content={keywords}/>
    </Head>
    <Header />
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
