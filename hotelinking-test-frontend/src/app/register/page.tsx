'use client'

import { useState } from 'react';
import { registerUser } from '@/services/authService';
import { useRouter } from "next/navigation";


const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      console.log(userData);

      await registerUser({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        password_confirmation: userData.password_confirmation
      });
      router.replace('/promotions')
    } catch (error) {
      setError(`Error al crear el usuario: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-gray">
      <h1 className="text-3xl font-bold text-purple mb-6">Registrarse</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-80">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            name="name"
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            placeholder="Nombre"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-light-purple focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
          <input
            name="email"
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            placeholder="E-mail"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-light-purple focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            placeholder="Contraseña"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-light-purple focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
          <input
            name="password_confirmation"
            type="password"
            value={userData.password_confirmation}
            onChange={(e) => setUserData({ ...userData, password_confirmation: e.target.value })}
            placeholder="Confirmar Contraseña"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-light-purple focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className={`w-full ${isLoading ? 'bg-gray-300' : 'bg-purple'} text-white py-2 rounded-md hover:bg-light-purple transition duration-200`}
          disabled={isLoading}
        >
          {isLoading ? 'Cargando...' : 'Registrarse'}
        </button>
      </form>
    </div>

  );
};

export default Register;
