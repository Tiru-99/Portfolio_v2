import { Redis } from '@upstash/redis'

const redis_token = process.env.REDIS_TOKEN; 
const redis_url = process.env.REDIS_URL;

if(!redis_token || !redis_url){
  throw new Error("Env var not found"); 
}

export const redis = new Redis({
  url: redis_url,
  token: redis_token,
}); 

