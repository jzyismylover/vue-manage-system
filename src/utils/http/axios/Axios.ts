import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_PREFIX_URL as string,
  timeout: 1000,
  headers: {
    'content-type': 'application/json'
  }
})

// 请求拦截器
instance.interceptors.request.use(function() {})


// 响应拦截器
instance.interceptors.response.use(function() {})