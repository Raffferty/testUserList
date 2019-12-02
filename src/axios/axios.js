import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://frontend-candidate.dev.sdh.com.ua/v1/',
})

instance.interceptors.response.use(
  response => {
    return response
  },
  function(error) {
    const errorText = `${error.response.status} (${error.response.statusText})`

    return Promise.reject(errorText)
  }
)

export default instance
