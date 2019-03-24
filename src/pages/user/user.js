import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'


class User extends Component {

  config = {
    navigationBarTitleText: '个人主页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='user'>
      </View>
    )
  }
}

export default User
