import axios from 'axios';
import * as cheerio from 'cheerio';
import type { DayData, Pharmacy } from '../types/pharmacy';
import fs from 'fs/promises';
import path from 'path';

const PHARMACY_URLS = {
  casablanca: 'https://annuaire-gratuit.ma/pharmacie-garde-casablanca.html',
  rabat: 'https://annuaire-gratuit.ma/pharmacie-garde-rabat.html',
  sale: 'https://annuaire-gratuit.ma/pharmacie-garde-sale.html',
  // Add other cities...
};

async function scrapePharmacyData(url: string, cityName: string): Promise<DayData> {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const pharmacies: Pharmacy[] = [];

    // Update these selectors based on the actual website structure
    $('.pharmacy-listing').each((_, element) => {
      const name = $(element).find('.pharmacy-name').text().trim();
      const phone = $(element).find('.pharmacy-phone').text().trim();
      const location = $(element).find('.pharmacy-location').text().trim();
      const hours = $(element).find('.pharmacy-hours').text().trim();

      if (name) {
        pharmacies.push({
          name: createMultilingualText(name),
          phone,
          location: createMultilingualText(location),
          hours,
          city: createMultilingualText(cityName),
          address: createMultilingualText(''),
          maps: {
            message: {
              fr: "Voir sur la carte",
              en: "View on map",
              ar: "عرض على الخريطة"
            },
            links: {
              google_maps: '',
              waze: '',
              apple_maps: ''
            },
            googleMaps: '',
            coordinates: {
              lat: 0,
              lng: 0
            }
          }
        });
      }
    });

    return {
      date: new Date().toISOString().split('T')[0],
      pharmacies,
      total_pharmacies: pharmacies.length
    };
  } catch (error) {
    console.error(`Error scraping data for ${cityName}:`, error);
    return {
      date: new Date().toISOString().split('T')[0],
      pharmacies: [],
      total_pharmacies: 0
    };
  }
}

function createMultilingualText(text: string) {
  return {
    fr: text,
    en: text,
    ar: text
  };
}

export async function scrapeAllPharmacies(): Promise<void> {
  try {
    const results = await Promise.all(
      Object.entries(PHARMACY_URLS).map(([city, url]) => 
        scrapePharmacyData(url, city)
      )
    );

    const dataPath = path.join(process.cwd(), 'src/data/pharmacyData.json');
    await fs.writeFile(dataPath, JSON.stringify(results, null, 2));
    
    console.log('Pharmacy data updated successfully');
  } catch (error) {
    console.error('Error updating pharmacy data:', error);
  }
} 