import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'
import {
  AtTabs,
  AtTabsPane,
  AtTag
} from 'taro-ui'

import './search.scss'

import SearchItem from '../../components/searchItem/searchItem'


class Search extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      cataList: {
        shu: [
          {name: '01001', value: '教材'},
          {name: '01002', value: '中外文学'},
          {name: '01003', value: '软件设计'},
          {name: '01004', value: '其他'}
        ],
        danche: [
          {name: '02001', value: '死飞'},
          {name: '02002', value: '山地'},
          {name: '02003', value: '普通单车'},
          {name: '02004', value: '电车'}
        ],
        life: [
          {name: '03001', value: '化妆品'},
          {name: '03002', value: '公仔'},
          {name: '03003', value: '零食'},
          {name: '03004', value: '寝室家具'}
        ],
        yiwu: [
          {name: '04001', value: '衣服'},
          {name: '04002', value: '鞋子'},
          {name: '04003', value: '箱包'},
          {name: '04004', value: '配饰'}
        ],
        dianzi: [
          {name: '05001', value: '手表'},
          {name: '05002', value: '手机及相关'},
          {name: '05003', value: '摄像机相关'},
          {name: '05004', value: '电脑和它的配件'}
        ],
        yundong: [
          {name: '06001', value: '健身器材'},
          {name: '06002', value: '球类'},
          {name: '06003', value: '滑轮类'},
          {name: '06004', value: '其他'}
        ],
        yinyue: [
          {name: '07001', value: '吉他'},
          {name: '07002', value: '专辑'},
          {name: '07003', value: '各种乐器'},
          {name: '07004', value: '其他'}
        ],
        zawu: [
          {name: '08001', value: '杂物，找不到分类都在这'},
        ],
        yuan: [
          {name: '09001', value: '男生'},
          {name: '09002', value: '女生'},
          {name: '09003', value: '随缘'}
        ],
        chongwu: [
          {name: '10001', value: '阿猫'},
          {name: '10002', value: '阿狗'},
          {name: '10003', value: '小仓鼠'},
          {name: '10004', value: '稀有萌宠'}
        ],
        xunwu: [
          {name: '10001', value: '失物招领'},
          {name: '10002', value: '寻物启事'}
        ]
      }
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  // 点击标签tag触发
  handleTagClick(name, active) {
    console.log(name, active);
  }
  render() {
    return (
      <View>
        <SearchItem />
        <View className='search-type-container'>
          <AtTabs
            current={this.state.current}
            scroll
            height='610px'
            tabDirection='vertical'
            tabList={[
              {title: '二手书'},
              {title: '二手单车'},
              {title: '生活用品'},
              {title: '衣物'},
              {title: '电子产品'},
              {title: '运动健身'},
              {title: '音乐'},
              {title: '杂物'},
              {title: '宠物寄养'},
              {title: '寻物寻主'},
              {title: '缘'}
            ]}
            onClick={this.handleClick.bind(this)}
          >
            <AtTabsPane 
              tabDirection='vertical' current={this.state.current} index={0}
            >
              <View className='tagWrapper'>
                <View className='tagList'>
                  {
                    this.state.cataList.shu.map((item, index) => {
                      return (
                        <AtTag className='tagItem' key={index}
                          name={item.name}
                          type='primary'
                          circle
                          onClick={this.handleTagClick.bind(this)}
                        >{item.value}</AtTag>
                      )
                    })
                  }
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane 
              tabDirection='vertical' current={this.state.current} index={1}
            >
              <View className='tagWrapper'>
                <View className='tagList'>
                  {
                    this.state.cataList.danche.map((item, index) => {
                      return (
                        <AtTag className='tagItem' key={index}
                          name={item.name}
                          type='primary'
                          circle
                          onClick={this.handleTagClick.bind(this)}
                        >{item.value}</AtTag>
                      )
                    })
                  }
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane 
              tabDirection='vertical' current={this.state.current} index={2}
            >
              <View className='tagWrapper'>
                <View className='tagList'>
                  {
                    this.state.cataList.life.map((item, index) => {
                      return (
                        <AtTag className='tagItem' key={index}
                          name={item.name}
                          type='primary'
                          circle
                          onClick={this.handleTagClick.bind(this)}
                        >{item.value}</AtTag>
                      )
                    })
                  }
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane 
              tabDirection='vertical' current={this.state.current} index={3}
            >
              <View className='tagWrapper'>
                <View className='tagList'>
                  {
                    this.state.cataList.yiwu.map((item, index) => {
                      return (
                        <AtTag className='tagItem' key={index}
                          name={item.name}
                          type='primary'
                          circle
                          onClick={this.handleTagClick.bind(this)}
                        >{item.value}</AtTag>
                      )
                    })
                  }
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane 
              tabDirection='vertical' current={this.state.current} index={4}
            >
              <View className='tagWrapper'>
                <View className='tagList'>
                  {
                    this.state.cataList.dianzi.map((item, index) => {
                      return (
                        <AtTag className='tagItem' key={index}
                          name={item.name}
                          type='primary'
                          circle
                          onClick={this.handleTagClick.bind(this)}
                        >{item.value}</AtTag>
                      )
                    })
                  }
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane 
              tabDirection='vertical' current={this.state.current} index={5}
            >
              <View className='tagWrapper'>
                <View className='tagList'>
                  {
                    this.state.cataList.yundong.map((item, index) => {
                      return (
                        <AtTag className='tagItem' key={index}
                          name={item.name}
                          type='primary'
                          circle
                          onClick={this.handleTagClick.bind(this)}
                        >{item.value}</AtTag>
                      )
                    })
                  }
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane 
              tabDirection='vertical' current={this.state.current} index={6}
            >
              <View className='tagWrapper'>
                <View className='tagList'>
                  {
                    this.state.cataList.yinyue.map((item, index) => {
                      return (
                        <AtTag className='tagItem' key={index}
                          name={item.name}
                          type='primary'
                          circle
                          onClick={this.handleTagClick.bind(this)}
                        >{item.value}</AtTag>
                      )
                    })
                  }
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane 
              tabDirection='vertical' current={this.state.current} index={6}
            >
              <View className='tagWrapper'>
                <View className='tagList'>
                  {
                    this.state.cataList.zawu.map((item, index) => {
                      return (
                        <AtTag className='tagItem' key={index}
                          name={item.name}
                          type='primary'
                          circle
                          onClick={this.handleTagClick.bind(this)}
                        >{item.value}</AtTag>
                      )
                    })
                  }
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane 
              tabDirection='vertical' current={this.state.current} index={6}
            >
              <View className='tagWrapper'>
                <View className='tagList'>
                  {
                    this.state.cataList.yuan.map((item, index) => {
                      return (
                        <AtTag className='tagItem' key={index}
                          name={item.name}
                          type='primary'
                          circle
                          onClick={this.handleTagClick.bind(this)}
                        >{item.value}</AtTag>
                      )
                    })
                  }
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane 
              tabDirection='vertical' current={this.state.current} index={6}
            >
              <View className='tagWrapper'>
                <View className='tagList'>
                  {
                    this.state.cataList.chongwu.map((item, index) => {
                      return (
                        <AtTag className='tagItem' key={index}
                          name={item.name}
                          type='primary'
                          circle
                          onClick={this.handleTagClick.bind(this)}
                        >{item.value}</AtTag>
                      )
                    })
                  }
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane 
              tabDirection='vertical' current={this.state.current} index={6}
            >
              <View className='tagWrapper'>
                <View className='tagList'>
                  {
                    this.state.cataList.xunwu.map((item, index) => {
                      return (
                        <AtTag className='tagItem' key={index}
                          name={item.name}
                          type='primary'
                          circle
                          onClick={this.handleTagClick.bind(this)}
                        >{item.value}</AtTag>
                      )
                    })
                  }
                </View>
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
      </View>
    )
  }
}

export default Search;
