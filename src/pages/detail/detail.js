import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text,
  Image
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'

import './detail.scss'


import MySwiper from '../../components/mySwiper/mySwiper'

@connect((store) => {
  return {...store.home}
}, (dispatch) => {
  return {}
})
class Detail extends Component {

  config = {
    navigationBarTitleText: '详情'
  }

  constructor() {
    super(...arguments);
    this.state = {}
  }
  render() {
    const { banner } = this.props;
    return (
      <View className='detail'>
         <MySwiper banner={banner} />
         <View className='detail-info'>
          <View className='detail-info-desc'>
            <Text className='detail-info-desc-title'>
              各类网课
            </Text>
            <Text className='detail-info-desc-price'>
              ￥20
            </Text>
          </View>
          <View className='detail-info-tags'>
            <Text className='detail-info-tags-item address'>南区逸夫楼</Text>
            <Text className='detail-info-tags-item type'>随缘</Text>
          </View>
         </View>

         <View className='detail-seller'>
          <View className='left'>
            <Image  src={require('../../assets/img/logo2.png')} />
            <View className='detail-seller-info'>
              <Text className=''>南巷旧人</Text>
              <Text className=''>2019-3-31  8:53</Text>
            </View>
          </View>
          <View className='right'>
            <Text>1</Text>
            <Text>在售宝贝</Text>
          </View>
         </View>


        <View className='detail-content'>
          <View className='detail-content-title'>商品详情</View>
          <View className='detail-content-desc'>
            有各种各样的网课，比如四六级雅思托福PS office 课程等等、比官网的冰点价还要低好多！
          有兴趣可以联系我！微信手机同号。
 
          </View>
        </View>


        <View className='detail-comment'>
          <View className='detail-comment-title'>全部留言 (0)</View>
          <View className='detail-comment-desc'>
           <View className='isComment'>该信息暂时没有留言</View>
          </View>
        </View>

        <View className='detail-fixed'>
          <View className='detail-fixed-item'>
            <Image src={require('../../assets/img/collection.png')} />
            <Text>喜欢</Text>
          </View>
          <View className='detail-fixed-item'>
            <Image src={require('../../assets/img/about.png')} />
            <Text>分享</Text>
          </View>
          <View className='detail-fixed-item'>
            <Text>联系卖家</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Detail;
