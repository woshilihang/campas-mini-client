import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'

import './myPublish.scss'

class MyPublish extends Component {
  constructor() {
    super(...arguments);
    this.state = {}
  }
  render() {
    return (
      <View>
        <Text>MyPublish</Text>
      </View>
    )
  }
}

export default MyPublish;
