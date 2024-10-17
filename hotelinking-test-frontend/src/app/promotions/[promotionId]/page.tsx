'use client'

import { axiosInstance } from "@/services/axiosInstance";
import { useEffect, useState } from "react";

interface Promotion {
  id: number;
  descripcion: string,
  precio: number
};

const PromotionDetailPage = ({ params }: { params: { promotionId: string } }) => {
  const [promotion, setPromotion] = useState<Promotion>();

  useEffect(() => {
    const getPromotionDetail = async () => {
      if (!params.promotionId) return; // Previene hacer una solicitud si id no está disponible
      try {
        const response = await axiosInstance.get(`api/promotions/${params.promotionId}`);
        setPromotion(response.data);
      } catch (error) {
        console.log('Error fetching promotion: ', error);
      }
    };

    getPromotionDetail();
  }, [params.promotionId]);

  const handleGenerateCode = async () => {
    try {
      await axiosInstance.post(`api/promotions/${params.promotionId}/generate-code`);
      alert('Código generado con éxito');
    } catch (error) {
      console.log('Error generando código: ', error);
    }
  };


  if (!promotion) return <p>Cargando...</p>

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
      <h1 className="text-3xl font-bold text-purple mb-2">{promotion.descripcion}</h1>
      <p className="text-lg text-gray-700 mb-4">Precio: <span className="text-light-purple font-semibold">${promotion.precio}</span></p>

      <div className="flex justify-between">
        <button
          onClick={handleGenerateCode}
          className="flex-1 bg-purple text-white py-3 rounded-md hover:bg-violet-400 hover:text-black transition duration-200 transform hover:scale-105 shadow-md"
        >
          Generar Código
        </button>
      </div>
    </div>

  )
}

export default PromotionDetailPage