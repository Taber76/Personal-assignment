// src/app/flights/[flight]/page.tsx
'use client';

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
    <div>
      <h1>Detalles del vuelo: {flight}</h1>
    </div>
  );
};

export default FlightDetail;
