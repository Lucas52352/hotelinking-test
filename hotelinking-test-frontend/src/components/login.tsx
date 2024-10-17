'use client'

import { loginUser } from "@/services/authService";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"

interface LoginData {
  email: string,
  password: string
}

const LoginComponent = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  })

  const [error, setError] = useState<string>('');
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const data = await loginUser(loginData);
      localStorage.setItem('token', data.token);

      router.replace('/promotions')

    } catch (error) {
      console.log('Login failed: ', error);
      setError('Error al iniciar sesión.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-gray">
      <h1 className="text-3xl font-bold text-purple mb-6">Iniciar Sesión</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-80">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
          <input
            name="email"
            type="email"
            value={loginData.email}
            onChange={(event) => setLoginData({ ...loginData, email: event.target.value })}
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
            value={loginData.password}
            onChange={(event) => setLoginData({ ...loginData, password: event.target.value })}
            placeholder="Contraseña"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-light-purple focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className={`w-full ${isLoading ? 'bg-gray-300' : 'bg-purple'} text-white py-2 rounded-md hover:bg-light-purple transition duration-200`}
          disabled={isLoading}
        >
          {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>
  )
}

export default LoginComponent;
