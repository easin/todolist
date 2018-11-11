import axios from 'axios'

const API_ROOT = process.env.API_ROOT || 'http://10.0.2.2:8000'

axios.defaults.timeout = 3000
axios.defaults.baseURL = API_ROOT
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios
