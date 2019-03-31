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
    navigationBarTitleText: '花椒二手交易平台',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50, // 用户下滑到距离底部还有50PX的时候出发上滑加载功能
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

  // // 实现下拉加载
  // onScrollToLower() {
  //   console.log('到底了');
  // }

  // // 实现上拉刷新
  // onScrollToUpper() {
  //   console.log('到顶了');
  // }

  onPullDownRefresh() {
    console.log('执行了下拉刷新');
  }

  onReachBottom() {
    console.log('到底了');
  }

  render () {
    const { banner } = this.props;
    return (
      <View className='index'>
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
      </View>
    )
  }
}

export default Index
