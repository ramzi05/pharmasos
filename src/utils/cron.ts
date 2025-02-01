import cron from 'node-cron';
import { scrapeAllPharmacies } from './pharmacyScraper';
import fs from 'fs/promises';
import path from 'path';

// Run at midnight every day
cron.schedule('0 0 * * *', async () => {
  try {
    console.log('Starting daily pharmacy data scrape...');
    const pharmacyData = await scrapeAllPharmacies();
    
    const dataPath = path.join(process.cwd(), 'src/data/pharmacyData.json');
    await fs.writeFile(dataPath, JSON.stringify(pharmacyData, null, 2));
    
    console.log('Pharmacy data updated successfully');
  } catch (error) {
    console.error('Error updating pharmacy data:', error);
  }
}); 