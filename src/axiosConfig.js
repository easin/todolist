import axios from 'axios'

const API_ROOT = process.env.API_ROOT || 'http://192.168.1.1081:8000'

axios.defaults.timeout = 3000
axios.defaults.baseURL = API_ROOT
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios
