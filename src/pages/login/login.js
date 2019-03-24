import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Image,
  Button
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'

import {
  AtInput,
  AtModal,
  AtModalHeader,
  AtModalAction,
  AtModalContent
} from 'taro-ui';

import './login.scss'
import logo from '../../assets/img/logo1.png'

import {
  showMessage
} from '../../util/common'

import {
  base
} from '../../constants/status'


class Login extends Component {

  config = {
    navigationBarTitleText: '登录'
  }

  constructor() {
    super(...arguments);
    this.state = {
      userName: '',
      modelVisible: false
    }
  }

  nameChange(value) {
    this.setState({
      userName: value
    })
  }

  login() {
    if(!this.state.userName) {
      showMessage('用户名不能空');
    } else {
      Taro.request({
        url: `${base}/users/${this.state.userName}`,
        method: 'GET'
      }).then(res => {
        if(res.data.name) {
          showMessage('登录成功');
          Taro.setStorage({
            key: 'userInfo', data: JSON.stringify(res.data)
          }).then(res => {
            Taro.switchTab({
              url: '/pages/index/index'
            })
          });
        } else {
          this.setState({
            modelVisible: true
          })
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }

  hideDialog() {
    this.setState({
      modelVisible: false
    });
    Taro.switchTab({
      url: '/pages/index/index'
    })
  }

  render() {
    return (
      <View className='page'>
      <Image className='img' src={logo} />
      <View className='page-form'>
        <AtInput className='page-form-name'
          type='text'
          placeholder='请输入用户名'
          value={this.state.userName}
          onChange={this.nameChange.bind(this)}
        />
        <View className='page-form-submit' onClick={this.login.bind(this)} >
          登录
        </View>
      </View>

      <AtModal isOpened={this.state.modelVisible} closeOnClickOverlay={false}>
        <AtModalHeader>提示</AtModalHeader>
        <AtModalContent>用户不存在</AtModalContent>
        <AtModalAction>
          <Button onClick={this.hideDialog.bind(this)}>确定</Button>
        </AtModalAction>
      </AtModal>

    </View>
    )
  }
}

export default Login;
