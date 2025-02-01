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
    googleMaps: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

export interface DayData {
  date: string;
  total_pharmacies: number;
  pharmacies: Pharmacy[];
} 