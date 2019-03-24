import Taro, { Component } from '@tarojs/taro'
import {
  Swiper,
  SwiperItem,
  Image,
  View,
  Text
} from '@tarojs/components'

import {
  connect
} from '@tarojs/redux'

import PropTypes from 'prop-types'

// 引入样式文件
import './popSwiper.scss'

class popSwiper extends Component {
  static propTypes = {
    banner: PropTypes.array,
  }
  static defaultProps = {
    banner: [],
  }

  constructor() {
    super(...arguments);
    this.state = {}
  }
  render() {
    const { banner } = this.props;
    return (
      <View className='pop'>
        <View className='pop-container'>
          <View className='title'>近期热门</View>
          <View className='hr'></View>
          <Swiper className='swiper-container'
            circular
            autoplay
            vertical='true'
            interval='3000'
          >
            {
              banner.map((item, index) => {
                return <SwiperItem key={index} className='swiper-item'>
                  <Image className='swiper-img' mode='widthFix' src={item.img_src}></Image>
                  <View className='right'>
                    <Text className='text-info'>IPone 8plus 256G 深空灰色</Text>
                    <Text className='text-info'>出两台备用红米手机</Text>
                    <Text className='text-info'>佛系出书</Text>
                  </View>
                </SwiperItem>
              })
            }
          </Swiper>
        </View>
      </View>
    )
  }
}

export default popSwiper;
