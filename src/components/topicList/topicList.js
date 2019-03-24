import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'

// 引入taro-ui组件
import {
  AtTabs,
  AtTabsPane
} from 'taro-ui'

import Topic from './topic'

import './topicList.scss'

class TopicList extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    const tabList = [{title: '二手交易'}, {title: '寻物寻主'}, {title: '免费专区'}];
    return (
      <View className='topicList'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)} swipeable={false} >
          <AtTabsPane current={this.state.current} index={0}>
            <Topic />
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default TopicList;
