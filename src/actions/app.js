// action app.js
import * as constants from '../constants/app'

// 更改登录状态
export const changeAppOnLaunch = () => ({
  type: constants.CHANGE_APP_ON_LAUNCH
});

export const insertToken = (authorize) => ({
  type: constants.INSERT_AUTHORIZE,
  authorize
});