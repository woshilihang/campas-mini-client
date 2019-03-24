import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Image,
  Button
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'

import './authorization.scss'
import logo from '../../assets/img/logo1.png'

class Authorization extends Component {

  config = {
    navigationBarTitleText: '授权'
  }

  constructor() {
    super(...arguments);
    this.state = {
      text: '获取微信授权登录'
    }
  }

  confirmModal(e) {
    console.log(e);
    if(e.detail.userInfo) {
      if(Taro.getStorageSync('userInfo') && JSON.parse(Taro.getStorageSync('userInfo').nickName)) {
        Taro.switchTab({
          url: `/pages/index/index`
        });
      } else {
        Taro.redirectTo({
          url: `/pages/login/login`
        });
      }
    }
  }

  render() {
    return (
      <View className='page'>
        <Image className='img' src={logo} />
        <Button className='page-button' 
          openType='getUserInfo'
          onGetUserInfo={this.confirmModal.bind(this)}
        >
          {this.state.text}
        </Button>
      </View>
    )
  }
}

export default Authorization;
