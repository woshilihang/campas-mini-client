import Taro from '@tarojs/taro';

export const test = 1;

export const logError = (name, action, info) => {
  if(!info) {
    info = 'empty';
  }
  try {
    let deviceInfo = Taro.getSystemInfoSync();
    var device = JSON.stringify(deviceInfo);
  } catch (err) {
    console.error('not support getSystemInfoSync api', err.message)
  }
  // let time = formatTime(new Date());
  console.error(new Date(), name, action, info, device);

  if(typeof info === 'object') {
    info = JSON.stringify(info);
  }
}