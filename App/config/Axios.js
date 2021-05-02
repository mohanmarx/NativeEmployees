import axios from 'axios'

const instance = axios.create({
  baseURL: ''
})

instance.interceptors.request.use(request => {
  return request
})

export default instance