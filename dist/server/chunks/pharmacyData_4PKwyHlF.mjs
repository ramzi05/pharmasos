import { p as pharmacyData$1 } from './pharmacyData_BJWmU42j.mjs';

const pharmacyDataWithTotal = (Array.isArray(pharmacyData$1) ? pharmacyData$1 : [pharmacyData$1]).map((day) => ({
  ...day,
  total_pharmacies: day.pharmacies.length
}));
const pharmacyData = pharmacyDataWithTotal;

export { pharmacyData as p };
