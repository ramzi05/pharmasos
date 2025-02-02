import type { APIRoute } from 'astro';
import { scrapeAllPharmacies } from '../../utils/pharmacyScraper';

export const get: APIRoute = async () => {
  try {
    // Scrape data from all cities
    const pharmacyData = await scrapeAllPharmacies();
    
    return new Response(JSON.stringify(pharmacyData), {
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

export const post: APIRoute = async () => {
  try {
    const pharmacyData = await scrapeAllPharmacies();
    return new Response(JSON.stringify(pharmacyData), {
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