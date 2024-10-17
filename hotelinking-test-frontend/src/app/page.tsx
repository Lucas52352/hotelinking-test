// src/app/LandingPage.js
import { WavesSvg } from '@/components/wavesSvg';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-primary.light-gray text-black">
      <WavesSvg />
      <h1 className="text-4xl font-bold mb-8 z-10">Bienvenido a nuestra Aplicación</h1>
      <p className="mb-8 z-10">Canjea tus códigos y disfruta de nuestras promociones.</p>
      <div className="flex space-x-4 z-10">
        <Link href="/login" className="bg-light-purple text-white px-6 py-3 rounded-md hover:bg-dark-purple transition z-10">
          Iniciar Sesión
        </Link>
        <Link href="/register" className="bg-light-purple text-white px-6 py-3 rounded-md hover:bg-dark-purple transition z-10">
          Registrarse
        </Link>
      </div>
    </div>
  );
};


export default LandingPage;
