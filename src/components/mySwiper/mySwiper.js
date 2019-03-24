import Taro, { Component } from '@tarojs/taro'
import {
  Swiper,
  SwiperItem,
  Image
} from '@tarojs/components'

import {
  connect
} from '@tarojs/redux'

import PropTypes from 'prop-types'

// 引入样式文件
import './mySwiper.scss'

class mySwiper extends Component {
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
      <Swiper className='swiper-container'
        circular
        indicatorDots
        indicatorColor='#999'
        indicatorActiveColor='#bf708f'
        autoplay
      >
        {
          banner.map((item, index) => {
            return <SwiperItem key={index}>
              <Image className='swiper-img' mode='widthFix' src={item.img_src}></Image>
            </SwiperItem>
          })
        }
      </Swiper>
    )
  }
}

export default mySwiper;
