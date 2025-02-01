import type { APIRoute } from 'astro';
import { scrapeAllPharmacies } from '../../utils/pharmacyScraper';
import fs from 'fs/promises';
import path from 'path';

export const get: APIRoute = async () => {
  try {
    // Scrape data from all cities
    const pharmacyData = await scrapeAllPharmacies();
    
    // Save to a JSON file
    const dataPath = path.join(process.cwd(), 'src/data/pharmacyData.json');
    await fs.writeFile(dataPath, JSON.stringify(pharmacyData, null, 2));
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export async function POST() {
  try {
    await scrapeAllPharmacies();
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 