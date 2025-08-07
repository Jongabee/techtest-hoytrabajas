import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
    </>
  );
}
