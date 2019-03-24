import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'


class Publsih extends Component {

  config = {
    navigationBarTitleText: '二手信息发布'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='publsih'>
      </View>
    )
  }
}

export default Publsih
