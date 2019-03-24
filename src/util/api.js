import Taro from '@tarojs/taro';
import {
  HTTP_STATUS,
  base
} from '../constants/status';

import {
  logError
} from './logError';

const token = '';

export default {
  baseOptions(params, method = 'GET') {
    let {
      url,
      data
    } = params;
    let contentType = 'application/x-www-form-urlencoded';
    contentType = params.contentType || contentType;
    const opts = {
      isShowLoading: false,
      loadingText: '正在加载中...',
      url: base + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
        'token': token
      },
      success: (res) => {
        if (res.statusCode === HTTP_STATUS.not_fount) {
          return logError(`api 请求资源不存在`);
        } else if (res.statusCode === HTTP_STATUS.gateway_timeout) {
          return logError(`api 服务器端出了问题`);
        } else if (res.statusCode === HTTP_STATUS.forbidden) {
          return logError(`api 没有权限访问`);
        } else if (res.statusCode === HTTP_STATUS.success) {
          return res.data;
        }
      },
      error: (err) => {
        logError(`api 请求出现问题 ${err}`);
      }
    };

    return Taro.request(opts);
  },

  /**
   * 封装GET方法
   * 传入url, data
   * 返回Taro.request请求
   */
  get(url, data = '') {
    let params = {
      url,
      data
    };
    return this.baseOptions(params);
  },

  /**
   * 封装POST方法
   * 传入url, data, contentType
   * 返回Taro.request请求
   */
  post(url, data, contentType) {
    let params = {
      url,
      data,
      contentType
    };
    return this.baseOptions(params);
  }
}
