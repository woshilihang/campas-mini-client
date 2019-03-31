// action app.js

import * as constants from '../constants/app'

// 更改登录状态
export const changeAppOnLaunch = () => ({
  type: constants.CHANGE_APP_ON_LAUNCH
});

// 写入授权信息
export const insertToken = (authorize) => ({
  type: constants.INSERT_AUTHORIZE,
  authorize
});