import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "next/image";
import {FaBackward } from 'react-icons/fa'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
            <div className="text-center my-10">
            <Image
              src={'/static/404Custom.svg'}
              alt="Page Not Found"
              width="800"
              height="400"
              layout="intrinsic"
            />
           <br />
           <br />
              <Link href="/">
                <a className="content-center">
                <FaBackward className="inline mr-2" /> 
               Back Home
                </a>
              </Link>
            </div>
            <hr className="opacity-10" />
    </Layout>
  );
}
