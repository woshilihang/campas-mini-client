import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'

// import './collection.scss'

class Collection extends Component {
  constructor() {
    super(...arguments);
    this.state = {}
  }
  render() {
    return (
      <View>
        <Text>Collection</Text>
      </View>
    )
  }
}

export default Collection;
