export enum FlightStatus {
  Scheduled = 'scheduled',
  Delayed = 'delayed',
  Canceled = 'canceled',
  Completed = 'completed',
}

export enum FlightType {
  Cargo = 'cargo',
  Passenger = 'passenger',
}

export interface FlightLive {
  id: number;
  flightCode: string;
  aircraftType: string;
  flightType: FlightType
  scheduledArrival: Date;
  scheduledDeparture: Date;
  status: FlightStatus;
  createdAt: Date;
};

export interface FlightService {
  createFlight(flight: FlightLive): Promise<FlightLive>;
  updateFlightStatus(flightId: number, status: FlightStatus): Promise<void>;
  getFlights(status?: FlightStatus): Promise<FlightLive[]>;
}



export interface FlightHistorical {
  id: number;
  flightCode: string;
  aircraftType: string;
  flightType: FlightType
  scheduledArrival: Date;
  scheduledDeparture: Date;
  actualArrival?: Date;
  actualDeparture?: Date;
  status: FlightStatus;
  completedAt: Date;
};
