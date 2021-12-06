import axios from 'axios'
import md5 from 'md5'

//const baseURL = 'http://gateway.marvel.com/v1/public/characters?'

const publicKey = '2185c29249f91769bdcf215104fa87ef'
const privateKey = 'b5bbe301e2b1c386b52de1c1d82e7322829b959e'

const ts = Number(new Date())

const hash = md5(ts + privateKey + publicKey)

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
})
