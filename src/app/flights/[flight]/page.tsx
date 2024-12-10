// src/app/flights/[flight]/page.tsx
'use client';

import { FaPlane, FaClock, FaClone, FaFlag } from "react-icons/fa";
import { useEffect, useState } from 'react';

const FlightDetail = ({ params }: { params: Promise<{ flight: string }> }) => {
  const [flight, setFlight] = useState<string | null>(null);

  useEffect(() => {
    params.then((data) => {
      setFlight(data.flight);
    });
  }, [params]);

  if (!flight) return <p>Loading...</p>;

  return (
    <div className="flex gap-4 items-center">

      <div className="flex flex-wrap gap-4 p-4 items-center">
        {/* Primer badge */}
        <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg shadow-md">
          <FaPlane className="text-blue-500 w-6 h-6" />
          <div>
            <p className="text-sm text-gray-500">VUELO</p>
            <p className="text-xl font-bold text-gray-700">{flight}</p>
          </div>
        </div>
        {/* Segundo badge */}
        <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg shadow-md">
          <FaClock className="text-green-500 w-6 h-6" />
          <div>
            <p className="text-sm text-gray-500">HORA</p>
            <p className="text-xl font-bold text-gray-700">12:30 PM</p>
          </div>
        </div>
        {/* Tercer badge */}
        <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg shadow-md">
          <FaClone className="text-yellow-500 w-6 h-6" />
          <div>
            <p className="text-sm text-gray-500">TIPO</p>
            <p className="text-xl font-bold text-gray-700">Pasajeros</p>
          </div>
        </div>
        {/* Cuarto badge */}
        <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg shadow-md">
          <FaFlag className="text-red-500 w-6 h-6" />
          <div>
            <p className="text-sm text-gray-500">ESTADO</p>
            <p className="text-xl font-bold text-gray-700">Retrasado</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default FlightDetail;
