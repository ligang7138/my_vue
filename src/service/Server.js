'use strict'

import axios from 'axios';
import qs from 'qs';
import md5 from 'js-md5';
import router from '../router'
import DateUtils from '../utils/DateUtils';
import Loading from '../widget/global_loading/loading';
import LocalStorageUtils from '../utils/LocalStorageUtils';

axios.defaults.timeout = 60 * 1000;
axios.defaults.baseURL = '';
axios.defaults.withCredentials = true; //请求时带上cookie
axios.defaults.showLoading = true; //默认显示loading
let loading = new Loading();

//http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.showLoading) {
      showFullScreenLoading()
    }
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded',
    config.headers['Accept'] = 'application/json'

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  response => {
    tryHideFullScreenLoading();
    return response;
  },
  err => {
    tryHideFullScreenLoading();
    if(err && err.response){
      switch (err.response.status) {
        case 400:
          console.log('错误请求')
          break;
        case 401:
          let localStorageUtils = new LocalStorageUtils();
          localStorageUtils.clear();
          setTimeout(function () {
            router.replace({
              path: '/login'
            })
          },3000)
          console.log('未授权，请重新登录')
          break;
        case 403:
          console.log('拒绝访问')
          break;
        case 404:
          console.log('请求错误,未找到该资源')
          break;
        case 405:
          console.log('请求方法未允许')
          break;
        case 408:
          console.log('请求超时')
          break;
        case 500:
          console.log('服务器端出错')
          break;
        case 501:
          console.log('网络未实现')
          break;
        case 502:
          console.log('网络错误')
          break;
        case 503:
          console.log('服务不可用')
          break;
        case 504:
          console.log('网络超时')
          break;
        case 505:
          console.log('http版本不支持该请求')
          break;
        default:
          console.log(`连接错误${err.response.status}`)
    }
    } else {
      console.log("Server connection failed...");
    }
    return Promise.resolve(err.response);
  }
);

/**
 * get request
 * @param url
 * @param params
 * return {promise}
 * */
export function get(url, params = {},data = null) {
  return new Promise((resolve,reject) => {
    if(data){
      url += '?'+qs.stringify(data);
    }
    axios.get(url,{
      params:params
    }).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    })
  })
}

/**
 * post request
 * @param url
 * @param data
 * return {promise}
 * */
export function post(url, data = {}) {
  return new Promise((resolve,reject) => {
    axios.post(url,qs.stringify(data)).then(response => {
      resolve(response.data);
    },error => {
      reject(error);
    })
  })
}

let needLoadingRequestCount = 0

export function showFullScreenLoading() {

  if (needLoadingRequestCount === 0) {
    loading.show();
  }
  needLoadingRequestCount++
}
export function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return "";
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--

  if (needLoadingRequestCount === 0) {
    loading.close();
  }
}
/**
 * post request
 * @param url
 * @param data
 * return {promise}
 * */
export function postImg(url, data = {}) {
  return new Promise((resolve,reject) => {
    let md5Date = md5(new DateUtils().formatDate(new Date(),'yyyy-MM-dd'));
    axios.post(url,qs.stringify(data),{headers:{'Authorization': md5Date},timeout:600000}).then(response => {
      resolve(response.data);
    },error => {
      reject(error);
    })
  })
}



















