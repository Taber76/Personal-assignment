import { neon } from "@neondatabase/serverless";

export default class PostgreDao {
  private static instance: PostgreDao | null = null;
  private postgreInstance: any;

  private constructor() {
    this.postgreInstance = neon(process.env.DATABASE_URL as string);
  }

  public static getInstance(): PostgreDao {
    if (!PostgreDao.instance) {
      PostgreDao.instance = new PostgreDao();
    }
    return PostgreDao.instance;
  }

  async executeQuery(query: string): Promise<any> {
    const response = await this.postgreInstance(query);
    return response
  }

}