import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'

class Template extends Component {
  constructor() {
    super(...arguments);
    this.state = {}
  }
  render() {
    return (
      <View>
        <Text>Template</Text>
      </View>
    )
  }
}

export default Template;
