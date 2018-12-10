import axios from 'axios'
import qs from 'qs'
//47.98.161.226  10.0.2.2
const API_ROOT = process.env.API_ROOT || 'http://47.98.161.226:8000'


axios.defaults.timeout = 3000
axios.defaults.baseURL = API_ROOT
// axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// axios.interceptors.request.use((req) => {
//     console.log("dddddddddddd")
//     console.log(req)

//     if (req.method === 'post') {
//      // req.data = qs.stringify(req.data);

//     }
//     return req;
// }, (error) => Promise.reject(error));

axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    
    // Accept:"application/json, text/plain, */*" 指定客户端只能接受 json的

    //&& config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
    if (config.method === 'post' && config.data) {
          config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
          config.data = qs.stringify(config.data);
    }

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
