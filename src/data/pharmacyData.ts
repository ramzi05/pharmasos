export interface Pharmacy {
  city: {
    fr: string;
    en: string;
    ar: string;
  };
  name: {
    fr: string;
    en: string;
    ar: string;
  };
  location: {
    fr: string;
    en: string;
    ar: string;
  };
  phone: string;
  hours: string;
  address: {
    fr: string;
    en: string;
    ar: string;
  };
  maps: {
    message: {
      fr: string;
      en: string;
      ar: string;
    };
    links: {
      google_maps: string;
      waze: string;
      apple_maps: string;
    };
  };
}

export interface DayData {
  date: string;
  total_pharmacies: number;
  pharmacies: Pharmacy[];
}

// Import the pharmacy data from JSON
import pharmacyJson from './pharmacyData.json';

const pharmacyDataWithTotal: DayData[] = (Array.isArray(pharmacyJson) ? pharmacyJson : [pharmacyJson]).map((day: any) => ({
  ...day,
  total_pharmacies: day.pharmacies.length
}));

export const pharmacyData: DayData[] = pharmacyDataWithTotal;