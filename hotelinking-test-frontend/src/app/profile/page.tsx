'use client';

import { axiosInstance } from "@/services/axiosInstance";
import { useEffect, useState } from "react";

interface User {
  id: string,
  name: string
  email: string
}

interface Code {
  id: string
  codigo: string
  estado: string
  used_in: Date | null
  oferta_id: number
}

interface Promotion {
  id: number;
  descripcion: string,
  precio: number
};


export default function ProfilePage() {

  const [user, setUser] = useState<User>()
  const [codes, setCodes] = useState<Code[]>([]);
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {

      try {
        const response = await axiosInstance.get('api/user');
        setUser(response.data)

      } catch (error) {
        setError('Error retrieving user data');
        console.log('Error retrieving user data: ', error);
      }
    }

    const getUserCodes = async () => {
      try {
        const response = await axiosInstance.get('api/my-codes')
        setCodes(response.data)
      } catch (error) {
        setError('Error retrieving user codes');
        console.log('Error retrieving user codes: ', error);
      }
    }

    const getPromotions = async () => {
      try {
        const response = await axiosInstance.get('api/promotions');
        setPromotions(response.data);
      } catch (error) {
        setError('Error retrieving promotions');
        console.log('Error retrieving promotions: ', error);
      }
    };

    getUser();
    getUserCodes();
    getPromotions();
  }, [])

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <>Cargando...</>

  const getPromotionName = (ofertaId: number) => {
    const promotion = promotions.find(promo => promo.id === ofertaId);
    return promotion ? promotion.descripcion : 'Promoción no encontrada';
  };

  const handleRedeemCode = async (id: number) => {
    const codeId = id;
    try {
      await axiosInstance.put(`api/redeem-code/${codeId}`)
      alert('Code redeemed successfully');

    } catch (error) {
      console.log('Error redeeming code: ', error);
    }
  }


  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-purple">Perfil del Usuario</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <h2 className="mt-6 text-2xl font-semibold text-purple">Códigos Asociados</h2>
      {codes.length === 0 ? (
        <p>No tienes códigos asociados.</p>
      ) : (
        <ul className="mt-4">
          {codes.map(code => (
            <li key={code.id} className="border p-2 mb-2 rounded-md bg-light-gray">
              <p><strong>Id:</strong> {code.id}</p>
              <p><strong>Código:</strong> {code.codigo}</p>
              <p><strong>Estado:</strong> {code.estado}</p>
              <p><strong>Utilizado en:</strong> {code.used_in ? code.used_in.toString() : 'No utilizado'}</p>
              <p><strong>Promocion:</strong> {getPromotionName(code.oferta_id)}</p>
              <button
                onClick={() => handleRedeemCode(code.oferta_id)}
                className="flex-1 ml-2 bg-teal-600 text-white py-3 rounded-md hover:bg-teal-300 hover:text-black transition duration-200 transform hover:scale-105 shadow-md"
              >
                Canjear Código
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}