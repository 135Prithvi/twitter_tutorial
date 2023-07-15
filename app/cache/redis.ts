import { Redis } from '@upstash/redis'
import { env } from '../env/env.mjs'

export const redis = new Redis({
  url: env.CACHE_URL ,
  token: env.CACHE_TOKEN ,
})
   
