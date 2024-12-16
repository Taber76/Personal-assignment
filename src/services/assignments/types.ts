export interface AssignmentLive {
  id: number;
  flightId: number; // FK to FlightLive
  staffId: number;  // FK to Staff
  assignedAt: Date;
};

export interface AssignmentHistorical {
  id: number;
  flightId: number; // FK to FlightHistorical
  staffId: number;  // FK to Staff
  assignedAt: Date;
  unassignedAt?: Date;
};
