import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/dist/next-server/lib/router/router';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="w-5/6 m-auto">
      <Component {...pageProps} />
      </div>
      
    </Layout>
    
  )
}

export default MyApp
