'use client'

import { axiosInstance } from "@/services/axiosInstance"
import Link from "next/link"
import { FC, useEffect, useState } from "react"

interface Promotion {
  id: number;
  descripcion: string,
  precio: number
}

const PromotionsPage: FC = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([])

  useEffect(() => {
    const getPromotions = async () => {
      try {
        const response = await axiosInstance.get('api/promotions');
        setPromotions(response.data)
      } catch (error) {
        console.log('Error fetching promotions: ', error);
      }
    };

    getPromotions();
  }, [])

  return (
    <main className="p-6 bg-light-gray min-h-screen">
      <h1 className="text-2xl font-bold text-dark-purple mb-6">Promociones</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promotion) => (
          <li key={promotion.id} className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
            <Link href={`/promotions/${promotion.id}`}>
              <h2 className="text-purple text-xl font-semibold">{promotion.descripcion}</h2>
              <p className="text-dark-purple text-lg">Precio: ${promotion.precio}</p>
              <span className="block mt-4 bg-light-purple text-white py-2 text-center rounded transition hover:bg-purple">
                View Details
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default PromotionsPage;