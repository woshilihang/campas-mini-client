import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text,
  ScrollView
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'

import TopicItem from './topicItem'

import './topic.scss'


class Topic extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      list: [
        {
          id: 1,
          img_avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2425988043,2484997674&fm=27&gp=0.jpg',
          nickname: '香肠派对',
          info: '求2018汉语言文字学套教',
          type: '旧书',
          dest: '地址 北区图书馆一楼',
          time: '2019-3-17 13:47',
          price: '8.88',
          img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1991703289,3119815641&fm=27&gp=0.jpg'
        },
        {
          id: 2,
          img_avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2425988043,2484997674&fm=27&gp=0.jpg',
          nickname: '香肠派对',
          info: '求2018汉语言文字学套教',
          type: '旧书',
          dest: '地址 北区图书馆一楼',
          time: '2019-3-17 13:47',
          price: '8.88',
          img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1991703289,3119815641&fm=27&gp=0.jpg'
        },
        {
          id: 3,
          img_avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2425988043,2484997674&fm=27&gp=0.jpg',
          nickname: '香肠派对',
          info: '求2018汉语言文字学套教',
          type: '旧书',
          dest: '地址 北区图书馆一楼',
          time: '2019-3-17 13:47',
          price: '8.88',
          img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1991703289,3119815641&fm=27&gp=0.jpg'
        },
        {
          id: 4,
          img_avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2425988043,2484997674&fm=27&gp=0.jpg',
          nickname: '香肠派对',
          info: '求2018汉语言文字学套教',
          type: '旧书',
          dest: '地址 北区图书馆一楼',
          time: '2019-3-17 13:47',
          price: '8.88',
          img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1991703289,3119815641&fm=27&gp=0.jpg'
        },
        {
          id: 5,
          img_avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2425988043,2484997674&fm=27&gp=0.jpg',
          nickname: '香肠派对',
          info: '求2018汉语言文字学套教',
          type: '旧书',
          dest: '地址 北区图书馆一楼',
          time: '2019-3-17 13:47',
          price: '8.88',
          img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1991703289,3119815641&fm=27&gp=0.jpg'
        },
        {
          id: 5,
          img_avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2425988043,2484997674&fm=27&gp=0.jpg',
          nickname: '香肠派对',
          info: '求2018汉语言文字学套教',
          type: '旧书',
          dest: '地址 北区图书馆一楼',
          time: '2019-3-17 13:47',
          price: '8.88',
          img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1991703289,3119815641&fm=27&gp=0.jpg'
        }
      ]
    }
  }

  render() {
    const { list } = this.state; 
    return (
      <View>
        {
          list.map((item, index) => <TopicItem key={index} />)
        }
      </View>
    )
  }
}

export default Topic;
