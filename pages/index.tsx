import Head from 'next/head';
import TechExplanation from '../components/TechExplanation';

export default function Home() {
  return (
    <>
      <Head>
        <title>TechTest - Hoy Trabajas</title>
        <meta name="description" content="Aplicación de prueba técnica full-stack con Next.js" />
      </Head>

      <div className="container">
        <h1 className="page-title">Bienvenido</h1>
        <TechExplanation />
      </div>
    </>
  );
}
