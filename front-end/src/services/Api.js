/* eslint-disable */
import axios from 'axios'

const env = process.env.NODE_ENV || 'dev';

let HOST = '';

if(env === 'production') {
  HOST = '[HOST link here]'
}
else {
  HOST = 'http://localhost:8081' 
}

export default() => {
  return axios.create({
    baseURL: HOST,
  })
}
