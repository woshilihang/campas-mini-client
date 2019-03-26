import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'

import './about.scss'

class About extends Component {
  constructor() {
    super(...arguments);
    this.state = {}
  }
  render() {
    return (
      <View>
        <Text>About</Text>
      </View>
    )
  }
}

export default About;
