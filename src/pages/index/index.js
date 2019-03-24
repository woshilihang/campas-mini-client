import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input, ScrollView } from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'

import './index.scss'


import MySwiper from '../../components/mySwiper/mySwiper'
import PopSwiper from '../../components/popSwiper/popSwiper'
import TopicList from '../../components/topicList/topicList';

@connect((store) => {
  return {...store.home}
}, (dispatch) => {
  return {}
})
class Index extends Component {

  config = {
    navigationBarTitleText: '花椒二手交易平台'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor() {
    super(...arguments);
  }
  clickSearchPage() {
    Taro.navigateTo({
      url: '/pages/search/search'
    })
  }

  // 实现下拉加载
  onScrollToLower() {
    console.log('到底了');
  }

  // 实现上拉刷新
  onScrollToUpper() {
    console.log('到顶了');
  }

  render () {
    const { banner } = this.props;
    return (
      <ScrollView className='index' style={{height: '650PX'}} onScrollToLower={this.onScrollToLower.bind(this)} scrollY='true'>
        <View className='search-box'>
          <View className='input-Wrapper'>
            <Image alt='search' className='search-icon' src={require('../../assets/img/search.png')} />
            <Input type='text' onClick={this.clickSearchPage.bind(this)} disabled className='search-input' placeholder='查找' />
          </View>
          <Image alt='mes' className='leave-msg' src={require('../../assets/img/msg.png')} />
        </View>
        <MySwiper banner={banner} />
        <PopSwiper banner={banner} />
        <TopicList />
      </ScrollView>
    )
  }
}

export default Index
