import * as constances from '../constants/app'

const INITIAL_STATE = {
  // 请求接口地址
  baseURL: 'https://xx.xx.xx/',
  // 应用首次加载
  appOnLaunch: true,
  // 请求token
  authorize: ''
};


export default function app(state = INITIAL_STATE, action) {
  switch(action.type) {
    case constances.CHANGE_APP_ON_LAUNCH:
      return {
        ...state,
        appOnLaunch: false
      };
    case constances.INSERT_AUTHORIZE:
      return {
        ...state,
        authorize: action.authorize
      };
    default:
      return state;
  }
}
