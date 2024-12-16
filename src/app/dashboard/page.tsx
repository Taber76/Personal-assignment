'use client';

import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const handleRowClick = (flight: string) => {
    router.push(`/flights/${flight}`);
  };

  return (
    <div className="flex flex-col gap-4 pt-4 px-2">
      <table className="table-auto w-full border-separate border-spacing-0">
        <thead className="bg-gray-200 rounded-t-lg">
          <tr>
            <th className="border-b p-2 text-center">Vuelo</th>
            <th className="border-b p-2 text-center">Hora</th>
            <th className="border-b p-2 text-center">Tipo</th>
            <th className="border-b p-2 text-center">Estado</th>
            <th className="border-b p-2 text-center">Personal</th>
          </tr>
        </thead>
        <tbody>

          <tr
            className="hover:bg-gray-100 cursor-pointer"
            onClick={() => handleRowClick("LA1546")}
          >
            <td className="border-b p-2 text-center font-bold">LA1546</td>
            <td className="border-b p-2 text-center">11:31</td>
            <td className="border-b p-2 text-center">Carga</td>
            <td className="border-b p-2 text-center">
              <span className="bg-yellow-500 text-white py-1 px-3 rounded-full">Retrasado</span>
            </td>
            <td className="border-b p-2 text-center">
              <span className="bg-green-500 text-white py-1 px-3 rounded-full">Asignado</span>
            </td>
          </tr>

          <tr
            className="hover:bg-gray-100 cursor-pointer"
            onClick={() => handleRowClick("TM1546")}
          >
            <td className="border-b p-2 text-center font-bold">TM1546</td>
            <td className="border-b p-2 text-center">14:11</td>
            <td className="border-b p-2 text-center">Pasajeros</td>
            <td className="border-b p-2 text-center">
              <span className="bg-green-500 text-white py-1 px-3 rounded-full">A tiempo</span>
            </td>
            <td className="border-b p-2 text-center">
              <span className="bg-yellow-500 text-white py-1 px-3 rounded-full">Incompleto</span>
            </td>
          </tr>

          <tr
            className="hover:bg-gray-100 cursor-pointer"
            onClick={() => handleRowClick("AA5546")}
          >
            <td className="border-b p-2 text-center font-bold">AA5546</td>
            <td className="border-b p-2 text-center">15:22</td>
            <td className="border-b p-2 text-center">Pasajeros</td>
            <td className="border-b p-2 text-center">
              <span className="bg-green-500 text-white py-1 px-3 rounded-full">A tiempo</span>
            </td>
            <td className="border-b p-2 text-center">
              <span className="bg-red-500 text-white py-1 px-3 rounded-full">No asignado</span>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
