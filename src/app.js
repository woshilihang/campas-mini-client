import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
// 全局引入taro ui 样式文件
import 'taro-ui/dist/style/index.scss'
import Index from './pages/index'

import configStore from './store'

import './app.scss'
import './app.css'
import './assets/iconfont/iconfont.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/search/search',
      'pages/publish/publish',
      'pages/user/user'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#2a579a',
      navigationBarTitleText: '校园二手交易',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#333',
      selectedColor: '#2a579a',
      backgroundColor: "#fff",
      borderStyle: "white",
      list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/img/home.png',
        selectedIconPath: './assets/img/homeSelected.png'
      },{
        pagePath: 'pages/publish/publish',
        text: '发布',
        iconPath: './assets/img/publish.png',
        selectedIconPath: './assets/img/publishSelected.png'
      },{
        pagePath: 'pages/user/user',
        text: '我',
        iconPath: './assets/img/user.png',
        selectedIconPath: './assets/img/userSelected.png'
      }]
    }
  }

  componentDidMount () {
    // 将redux状态挂载到Taro对象上，方便使用
    Taro.$store = store;
  }

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
