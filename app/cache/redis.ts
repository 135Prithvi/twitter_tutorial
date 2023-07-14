import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: process.env.CACHE_URL || 'redis://localhost:6379',
  token: process.env.CACHE_TOKEN || '',
})
   
