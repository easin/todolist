import axios from 'axios'

const API_ROOT = process.env.API_ROOT || 'http://47.98.161.226:8000'

axios.defaults.timeout = 3000
axios.defaults.baseURL = API_ROOT
axios.defaults.headers.post['Content-Type'] = 'application/json'


axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(' before request is sent ========>'+config.baseURL+config.url)
    console.log(' config ========>')
    console.log(config)

    // let user = JSON.parse(localStorage.getItem('user'));
    // if(config.url.indexOf('login')<0)//非登入接口
    // {
    // 	if (user && user.token) {
    // 		config.headers.Authorization = `Bearer ${user.token}`;
    //     // return { 'Authorization': 'Bearer ' + user.token };
    // 	}
    // }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
export default axios
