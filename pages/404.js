import Link from "next/link";
import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
            <div className="text-center my-10">
              <h1 className="text-6xl font-Libre-Bodoni">Oops! That page can&apos;t be found</h1>
              <br />
              <p>
                The page you are looking for might have been removed, had its
                name changed or is temporarily unavailable.
              </p>

              <Link href="/">
                <a className="btn-style-one red-light-color">
                  Back to Home <i className="bx bx-chevron-right"></i>
                </a>
              </Link>
            </div>
    </Layout>
  );
}
