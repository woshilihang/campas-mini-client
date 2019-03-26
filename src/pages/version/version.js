import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'

import './version.scss'

class Version extends Component {
  constructor() {
    super(...arguments);
    this.state = {}
  }
  render() {
    return (
      <View>
        <Text>Version</Text>
      </View>
    )
  }
}

export default Version;
