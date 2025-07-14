import axios from 'axios'


export function getAPIClient() {
  const api = axios.create({
    headers: {
      'Content-type': 'application/json',
      'MB-USER-AGENT': 'Web monsta 1.0.0',
    },
    baseURL: import.meta.env.VITE_API_URL,

  })
  return api
}