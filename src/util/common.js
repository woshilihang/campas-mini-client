import Taro from '@tarojs/taro'

// 数据格式转换json转formData
export const formData = data => {
  let ret = '';
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret;
}

// 数据格式转换 json转formData,过滤掉没有数值的参数
export const formDataFilterEmpty = data => {
  let ret = ''
  for (let it in data) {
    if (data[it]) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
  }
  return ret
}

// 格式化时间
export const format = t => {
  return t > 9 ? t : '0' + t
}

// 时间转时间戳
export const timeToTimestamp = date => {
  return new Date(date).getTime();
}

// 时间戳转时间
export const timespaceToTime = timestamp => {
  if (Number(timestamp)) {
    let d = new Date(timestamp);
    let year = d.getFullYear();
    let month = format(d.getMonth() + 1);
    let date = format(d.getDate());
    let hour = format(d.getHours);
    let minutes = format(d.getMinutes());
    let seconds = format(d.getSeconds());
    return `${year}-${month}-${date} ${hour}:${minutes}:${seconds}`;
  } else {
    return timestamp;
  }
}

// 价格保留千分位，小数后两位
export function formatThousandPrice(num) {
  if (num !== '-') {
    num = num ? Number(num).toFixed(2) : '0.00'
    num = num.toString()
    if (num.indexOf('.') === -1) {
      return (num + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
    } else {
      var cent = num.split('.')
      var cent1 = cent[1]
      var sign = cent[0]
      return (sign + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,') + '.' + cent1
    }
  } else {
    return '-'
  }
}


// 监听事件
export function addEvent(obj, evName, callback) {
  if (obj.addEventListener) {
    obj.addEventListener(evName, callback);
  } else {
    obj.attachEvent('on' + evName, callback);
  }
}

// 公共提示
export function showMessage(msg) {
  Taro.showToast({
    title: msg,
    icon: 'none',
    duration: 1500
  })
}

// 数组去重
export function unique(arr) {
  let obj = {};
  return arr.reduce((cur, next) => {
    obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
    return cur;
  }, [])
}

// 移除最后一个逗号
export function removeLastComa(val) {
  return val.substring(0, val.length - 1);
};

// 判断手机号码是否正确
export function testuserName(val) {
  var myReg = /^1[3|4|5|7|8][0-9]{9}$/;
  if (val) {
    if (myReg.test(val)) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

export function PadZero(str) {
  return new RegExp(/^\d$/g).test(str) ? `0${str}` : str;
}

export function timeToFormat(val) {
  let _seconds = parseInt(Math.round(val)),
    mins,
    seconds,
    result;
  seconds = parseInt(_seconds % 60) ? parseInt(_seconds % 60) : "00";
  mins = parseInt(_seconds % 3600 / 60) ? parseInt(_seconds % 3600 / 60) : "00"
  result = `${PadZero(mins)}:${PadZero(seconds)}`
  return result
}

export function logout(userId, currentPage) {
  Taro.request({
      url: 'url',
      method: 'POST',
      data: {
        userId: userId,
        userType: 3
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
    })
    .then(res => {
      if (res.data.code == 0) {
        Taro.setStorage({
            key: 'userName',
            data: ""
          })
          .then(res => {
            if (currentPage == "index") {
              Taro.redirectTo({
                url: `/pages/login/index`
              })
            } else {
              Taro.setStorage({
                  key: 'isLogout',
                  data: true
                })
                .then(res => {
                  Taro.switchTab({
                    url: `/pages/index/index`
                  })
                })
            }
          })
      } else {
        showMessage(res.data.message)
      }
    }).catch(err => {
      showMessage(err)
    })
}
