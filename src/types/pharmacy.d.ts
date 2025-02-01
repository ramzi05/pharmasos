export interface Pharmacy {
  name: string;
  phone: string;
  location: string;
  hours: string;
}

export interface DayData {
  city: string;
  date: string;
  pharmacies: Pharmacy[];
} 