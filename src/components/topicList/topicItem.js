import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text,
  Image
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'

import './topicItem.scss'

class TopicItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {}
  }
  render() {
    return (
      <View className='topic-topicItem'>
        <View className='head'>
          <View className='left'>
            <Image className='head-img' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2425988043,2484997674&fm=27&gp=0.jpg000' />
            <View className='info'>
              <Text className='nickname'>南巷旧人</Text>
              <Text className='time'>2019-3-17 13:47</Text>
            </View>
          </View>
          <View className='money'>$10.0</View>
        </View>
        <View className='content'>
          <Image className='content-img' src='http://img3.imgtn.bdimg.com/it/u=2539663182,3695351635&fm=26&gp=0.jpg' />
          <Text className='content-info'>机器学习机器学习机器学习机器学习机器学习</Text>
        </View>
        <View className='foot'>
          <Text className='address'>
            地址 北区图书馆一楼 | 教材
          </Text>
        </View>
      </View>
    )
  }
}

export default TopicItem;
