export interface Staff {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  available: boolean;
  createdAt: Date;
};

export interface StaffRegister
  extends Omit<Staff, "id" | "createdAt"> { }

export interface StaffUpdate
  extends Omit<Staff, "createdAt"> { }
