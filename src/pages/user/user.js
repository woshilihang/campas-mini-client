import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { AtAvatar } from 'taro-ui';

import './user.scss'


import rightArrow from '../../assets/img/arrow.png';
import collection from '../../assets/img/collection.png'
import myPublish from '../../assets/img/myPublish.png'
import version from '../../assets/img/version.png'
import about from '../../assets/img/about.png'
import signOut from '../../assets/img/signOut.png'

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar: 'https://nervjs.github.io/taro/img/logo-taro.png',
      userName: '南巷旧人',
    }
  }

  config = {
    navigationBarTitleText: '个人主页',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50, // 用户下滑到距离底部还有50PX的时候出发上滑加载功能
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { 
    if(Taro.getStorageSync('userInfo')) {
      let userInfo = JSON.parse(Taro.getStorageSync('userInfo'));
      this.setState({
        avatar: userInfo.avatar_url,
        userName: userInfo.name
      })
    }
   
  }


  componentDidHide () { }

  onPullDownRefresh() {
    console.log('执行了下拉刷新');
  }

  onReachBottom() {
    console.log('到底了');
  }

  
  // 跳转各个功能呢个相应界面

  showSignOut() {
    Taro.navigateTo({
      url: '/pages/login/login'
    })
  }

  showMyPublish() {
    Taro.navigateTo({
      url: '/pages/myPublish/myPublish'
    })
  }

  showCollection() {
    Taro.navigateTo({
      url: '/pages/collection/collection'
    })
  }

  showVersion() {
    Taro.navigateTo({
      url: '/pages/version/version'
    })
  }

  showAbout() {
    Taro.navigateTo({
      url: '/pages/about/about'
    })
  }

  render () {
    return (
      <View className='user'>
        <View className='user-title'>
          <AtAvatar circle image={this.state.avatar} ></AtAvatar>
          <View>{this.state.userName}</View>
        </View>
        <View className='user-admin'>
          <View className='user-admin-item' onClick={this.showCollection.bind(this)} >
            <Image src={collection} />
            <Text className='text'>我喜欢的</Text>
            <Image className='right' src={rightArrow} />
          </View>
          <View className='user-admin-item' onClick={this.showMyPublish.bind(this)} >
            <Image src={myPublish} />
            <Text className='text'>我发布的</Text>
            <Image className='right' src={rightArrow} />
          </View>
          <View className='user-admin-item' onClick={this.showVersion.bind(this)} >
            <Image src={version} />
            <Text className='text'>版本信息</Text>
            <Image className='right' src={rightArrow} />
          </View>
          <View className='user-admin-item' onClick={this.showAbout.bind(this)}>
            <Image src={about} />
            <Text className='text'>关于</Text>
            <Image className='right' src={rightArrow} />
          </View>
          <View className='user-admin-item' onClick={this.showSignOut.bind(this)} >
            <Image src={signOut} />
            <Text className='text'>退出登录</Text>
            <Image className='right' src={rightArrow} />
          </View>
        </View>
      </View>
    )
  }
}

export default User
