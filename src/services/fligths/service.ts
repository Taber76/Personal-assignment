import PostgreDao from "@/dao/posgre.dao";
import { FlightLive, FlightStatus } from "./types";

export default class FlightService {
  /*
   static async createFlight(flight: FlightLive): Promise<FlightLive> {
     try {
       const response = await PostgreDao.getInstance().insertIntoTable<FlightLive>('flights_live', flight);
       return response;
     } catch (error) {
       console.error('Error creating flight:', error);
       throw error;
     }
   }
 */
  static async getFlights(status?: FlightStatus): Promise<FlightLive[]> {
    try {
      const response = await PostgreDao.getInstance().executeQuery('SELECT * FROM flights_live');
      return response;
    } catch (error) {
      console.error('Error getting flights:', error);
      throw error;
    }
  }
}