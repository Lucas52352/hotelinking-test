'use client'

import { loginUser } from "@/services/authService";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"

const LoginComponent = () => {
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setIsLoading(true); // Optional: loading state
    try {
      const data = await loginUser({ email, password });
      console.log('User logged in:', data);
      localStorage.setItem('token', data.token);

      // Redirect to promotions page

      router.replace('/promotions')


    } catch (error) {
      console.log('Login failed: ', error);
      setError('Error al iniciar sesión. Verifica tus credenciales.'); // Error handling
    } finally {
      setIsLoading(false); // End loading
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
