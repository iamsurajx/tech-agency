import { saasData } from './saas';
import { fintechData } from './fintech';
import { edtechData } from './edtech';
import { healthtechData } from './healthtech';
import { logisticsData } from './logistics';
import { d2cData } from './d2c';


// Yahan keys (jaise 'saas', 'fintech') aapke URL slugs hain. 
// Example: localhost:3000/industries/fintech
export const industriesData = {
  'saas': saasData,
  'fintech': fintechData,
  'edtech': edtechData,
  'healthtech': healthtechData,
  'logistics': logisticsData,
  'd2c': d2cData,
};