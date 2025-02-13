export interface Room {
    id: number;
    name: string;
    images: string[];
    isAC: boolean;
    sharingType: string;
    sqFt: number;
    prices: {
      daily: number;
      monthly: number;
    };
    facilities: string[];
    charges: {
      acUsagePerUnit?: number;
      fixedMonthlyCharges: Record<string, number>;
    };
  }
  