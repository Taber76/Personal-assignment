'use client';

import { useRouter } from "next/navigation";

const Staff = () => {
  const router = useRouter();

  const handleRowClick = (flight: string) => {
    router.push(`/flights/${flight}`);
  };

  return (
    <div className="flex flex-col gap-4 pt-4 px-2">
      <table className="table-auto w-full border-separate border-spacing-0">
        <thead className="bg-gray-200 rounded-t-lg">
          <tr>
            <th className="border-b p-2 text-center">Código</th>
            <th className="border-b p-2 text-center">Nombre</th>
            <th className="border-b p-2 text-center">Cargo</th>
            <th className="border-b p-2 text-center">Estado</th>
          </tr>
        </thead>
        <tbody>

          <tr
            className="hover:bg-gray-100 cursor-pointer"
            onClick={() => handleRowClick("124")}
          >
            <td className="border-b p-2 text-center font-bold">124</td>
            <td className="border-b p-2 text-center">John Sosa</td>
            <td className="border-b p-2 text-center">Encargado</td>
            <td className="border-b p-2 text-center">
              <span className="bg-green-500 text-white py-1 px-3 rounded-full">
                Disponible
              </span>
            </td>
          </tr>

          <tr
            className="hover:bg-gray-100 cursor-pointer"
            onClick={() => handleRowClick("395")}
          >
            <td className="border-b p-2 text-center font-bold">395</td>
            <td className="border-b p-2 text-center">Tabare Bermudez</td>
            <td className="border-b p-2 text-center">Operario 2</td>
            <td className="border-b p-2 text-center">
              <span className="bg-red-500 text-white py-1 px-3 rounded-full">Licencia</span>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Staff;
