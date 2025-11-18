// Storage interface for future features like calculation history
// Currently not used as all calculations are client-side

export interface IStorage {
  // Future: Add methods for saving calculation history
  // saveCalculation(calculation: any): Promise<void>;
  // getCalculationHistory(userId: string): Promise<any[]>;
}

export class MemStorage implements IStorage {
  constructor() {
    // Initialize any future storage needs
  }
}

export const storage = new MemStorage();
