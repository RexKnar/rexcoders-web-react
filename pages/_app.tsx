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
import { LazyMotion } from 'framer-motion';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // added bootstrap functionality
  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  // scroll animation added
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);

  // manage loading status
  useEffect(() => setLoading(false), []);
  const loadFeatures = () =>
    import("../src/utils/framer-motion-features/dom-max").then(res => res.default)


  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000
          }
        }
      })
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rexcoders Coding Academy | Live your Passion</title>
      </Head>
      <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
      <LazyMotion strict features={loadFeatures}>
      <ThemeProvider>
        
        {loading ? ( <div className="page-loader" />) : (
         <>
           <PageProgress />
         
         <header className="position-absolute w-100">
                <Navbar
                  info
                  navOtherClass="navbar-other ms-lg-4"
                  navClassName="navbar navbar-expand-lg center-nav  navbar-bg-light"
                  button={<a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-onetoone"
                    className="rounded btn btn-sm btn-primary"
                  >
                    Book 1:1
                  </a>} />
              </header><Component {...pageProps} /></>)}
      </ThemeProvider>
      </LazyMotion>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
