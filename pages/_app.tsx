import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';

// animate css
import 'animate.css';
// import swiper css
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
// video player css
import 'plyr-react/plyr.css';
// glightbox css
import 'glightbox/dist/css/glightbox.css';
// custom scrollcue css
import 'plugins/scrollcue/scrollCue.css';
// Bootstrap and custom scss
import 'assets/scss/style.scss';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import Link from 'next/link';

function MyApp({ Component, pageProps:{session, ...pageProps } }: AppProps) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);
  const [fullUrl, setFullUrl] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.href); // e.g., https://example.com/dashboard?tab=settings
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);

  useEffect(() => setLoading(false), []);


  return (
    <>
   
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rexcoders Coding Academy | Live your Passion</title>
      </Head>
   
      <ThemeProvider>
        {loading ? ( <div className="page-loader" />) : (
         <>
           <PageProgress />
           <header className="position-absolute w-100">
             <Navbar
             fancy
                navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none"
              //  navClassName="navbar navbar-expand-lg center-nav navbar-bg-light pt-2"
               button={
                 <>
                   <a
                     href="#"
                     data-bs-toggle="modal"
                     data-bs-target="#modal-onetoone"
                     className="rounded btn btn-sm btn-primary me-2"
                   >
                     Book 1:1
                   </a>
                   <Link href={`http://localhost:3000/signin?callbackUrl=${fullUrl}`}> Sign IN</Link>

                   {/* <a
                     href="#"
                     data-bs-toggle="modal"
                     data-bs-target="#modal-signin"
                     className="rounded btn btn-sm btn-outline-primary me-2"
                   >
                     Sign In
                   </a> */}
                  
                 </>
               }
             />
           </header>
           <Component {...pageProps} />
         </>
        )}
      </ThemeProvider>
    </>
  );
}

export default MyApp;