// 用来微信登录，获取授权信息

/***
 * 
 * authorize: {
 *  exp: 1552015587,
 *  iat: 1551410787,
 *  nbf: 1551410787,
 *  token: 'asdasdasdasasdasda'
 * }
 * iat为令牌签发时间，nbf令牌生效时间，token是用户状态，包含用户信息
 * exp 和 token
 */

// 在用户进入小程序的时候通过Taro.checkSession(),检查seesion_key是否过期
// 如果过期就通过Taro.login()重新登录进行授权、获取JWT授权信息，否则就判断用户的令牌
// 是否过期，如果过期就要重新刷新令牌，重新获取

import Taro from '@tarojs/taro'

import {
  insertToken,
  changeAppOnLaunch
} from '../actions/app'


async function getAuthToken() {
  const state = Taro.$store.getState();
  // login
  let res = await Taro.login();
  // 获取Token
  let response = await Taro.request({
    url: `${state.app.baseURL}api/xxx/xxx`,
    data: {
      code: res.code
    },
    method: 'POST'
  });
  // 判断是否成功
  if(response.data.data && response.data.data.authorize ) {
    // 写入token
    let authorize = response.data.data.authorize;
    saveAuthToken(authorize);
    return true;
  } else {
    console.log('获取token失败');
    return false;
  }

}

// 写入信息
function saveAuthToken(authorize) {
  // 写入状态管理
  Taro.$store.dispatch(insertToken(authorize));
  // 写入缓存
  Taro.setStorageSync('authorize', authorize);
}

// 获取数据
export default class Auth {

  // 检查令牌是否有效 true有效 false -- 无效
  static checkAuth() {
    const state = Taro.$store.getState();
    // 从缓存读取授权信息
    let authorize = state.authorize || Taro.getStorageSync('authorize') || {},
      expiryTime = 0,
      nowTime = ~~(Date.now() / 1000);
    if(authorize.exp) {
      expiryTime = authorize.exp;
    }
    return expiryTime - nowTime > 300;
  }
  
  // app授权
  static appCheckAuth() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      const state = Taro.$store.getState();
      // 如果有授权信息
      if(Auth.appCheckAuth() && !state.app.appOnLaunch) {
        // 直接返回
        resolve(true);
      } else {
        // Taro.checkSession检测用户登录态是否失效
        // 判断session_id是否过期
        Taro.checkSession().then(async () => {
          // 未过期检查token是否有效
          if(!Auth.checkAuth()) {
            // 判断是否token请求成功
            let flag = await getAuthToken();
            if(flag) {
              // 更新app状态
              Taro.$store.dispatch(changeAppOnLaunch());
              resolve(true);
            } else {
              Taro.showToast({
                title: '获取授权信息失败',
                icon: 'none',
                mask: true
              })
            }
          } else {
            // 更新app状态
            Taro.$store.dispatch(changeAppOnLaunch());
            // token 没有过期，直接返回
            resolve(true);
          }
        }).catch(async err => {
          console.log(err);
          let flag = await getAuthToken();
          //判断是否 token 请求成功
          if( flag ) {
              //更新app状态
              Taro.$store.dispatch(changeAppOnLaunch());
              resolve(true);
          }else{
              //提示
              Taro.showToast({
                  title : '获取授权信息失败' ,
                  icon : 'none' ,
                  mask : true
              })
          }
        })
      }
    })
  }
}