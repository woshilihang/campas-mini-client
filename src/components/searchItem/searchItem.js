import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'

// 引入taro-ui AtSearchBar组件
import { AtSearchBar } from 'taro-ui'
import './searchItem.scss'

class SearchItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: ''
    }
  }
  onChange(value) {
    console.log(value);
    this.setState({
      value
    })
  }
  onActionClick() {
    console.log('开始搜索' + this.state.value);
  }

  render() {
    return (
      <AtSearchBar
        actionName='搜一下'
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        onActionClick={this.onActionClick.bind(this)}
        fixed
        placeholder='请输入关键字...'
      />
    )
  }
}

export default SearchItem
