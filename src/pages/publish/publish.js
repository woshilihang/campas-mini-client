import Taro, { Component } from '@tarojs/taro'
import {
  View, Picker,Text, Input, Textarea, Button
} from '@tarojs/components'


import {
  connect
} from '@tarojs/redux'

import './publish.scss'
import { AtImagePicker } from 'taro-ui';

import {
  showMessage
} from '../../util/common'

// import AddressPicker from  '../../components/addressPicker/addressPicker'

class Publish extends Component {

  config = {
    navigationBarTitleText: '发布信息'
  }

  constructor() {
    super(...arguments);
    this.state = {
      pickerShow: true,
      type: ['二手书', '二手单车','寻物寻主'],
      typeChecked: '二手书',
      chengse: ['9.9成新', '9成新', '8成新'],
      chengseChecked: '8成新',
      addressChecked: '北图三楼',
      address: ['北图', '南图', '35栋软件大楼', '经管大楼'],
      files: [
        {
          url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
        },
        {
          url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
        },
        {
          url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
        }
      ],

    }
  }

  onChangeFileImg(files, operationType, index) {
    if(files.length > 4) {
      this.setState({
        files: files.slice(0, files.length-1)
      }, () => {
        console.log(this.state.files);
      });
      showMessage('添加失败，最多只能上传四张图片!');
      return false;
    } else {
      console.log(files)
      console.log(operationType)
      console.log(index)
      this.setState({
        files
      })
    }
  }

  toggleAddressPicker(e) {
    console.log(e)
    this.setState({
      pickerShow: !this.state.pickerShow
    })
  }

  onChangType(e) {
    console.log(e)
  }

  onImageClick (index, file) {
    console.log(index, file)
  }

  onFail (mes) {
    console.log(mes)
  }

  render() {
    return (
      <View className='publish'>
        {/* <AddressPicker pickerShow={this.state.pickerShow} onHandleToggleShow={this.toggleAddressPicker.bind(this)}/> */}
        <View className='publish-section'>
          <View className='publish-section-item'>
            <Text className='publish-section-item-title'>分类</Text>
            <Picker mode='selector' range={this.state.type} onChange={this.onChangType.bind(this)}>
              <View className='picker'>
                {this.state.typeChecked}
              </View>
            </Picker>
          </View>
          <View className='publish-section-item'>
            <Text className='publish-section-item-title'>成色</Text>
            <Picker mode='selector' range={this.state.chengse} onChange={this.onChangType.bind(this)}>
              <View className='picker'>
                {this.state.chengseChecked}
              </View>
            </Picker>
          </View>
          <View className='publish-section-item'>
            <Text className='publish-section-item-title'>标题</Text>
            <Input className='publish-section-input' placeholder='请输入标题(必填)' />
          </View>
          <View className='publish-section-item'>
            <Text className='publish-section-item-title'>价格</Text>
            <Input type='digit' className='publish-section-input' placeholder='请输入商品价格(必填)' placeholderStyle='color:red;' />
          </View>
        </View>

        <View className='publish-section'>
          <View className='publish-section-item'>
            <Text className='publish-section-item-title'>电话</Text>
            <Input type='number' className='publish-section-input' placeholder='请输入联系电话(必填)' placeholderStyle='color:red;' />
          </View>
          <View className='publish-section-item'>
            <Text className='publish-section-item-title'>地址</Text>
            <Picker mode='selector' range={this.state.address} onChange={this.onChangType.bind(this)}>
              <View className='picker'>
                {this.state.addressChecked}
              </View>
            </Picker>
          </View>
        </View>

        <View className='publish-section'>
          <View className='publish-section-item addImg'>
            <Textarea placeholder='请输入商品描述(200字以内)' maxlength='200' style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;'></Textarea>
            <View className='select-img'>
              <AtImagePicker files={this.state.files} length={5} onChange={this.onChangeFileImg.bind(this)} 
                onImageClick={this.onImageClick.bind(this)}
                onFail={this.onFail.bind(this)}
              />
            </View>
          </View>
         
          <View className='publish-section-item'>
            <Button className='publish-section-item-submit'>发布</Button>
          </View>

        </View>

      </View>
    )
  }
}

export default Publish;
