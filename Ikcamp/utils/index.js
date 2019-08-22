// export core
import config from  './config.js';
// export  list detail
import * as Mock from './mock.js';
// 方法封装
let util = {
  isDEV: config.isDev,
  // 封装console.log()
  log(){
    // if isDEV 为true 则输出……
    this.isDEV && console.log(...arguments)
  },
  alert(title = '提示', content = config.defaultAlertMessage){
    if ('object' === typeof content){
      // JSON.stringify() 转换为字符串
      content = this.isDEV && JSON.stringify(content) || config.defaultAlertMessage;
    }
    wx.showModal({
      title: title,
      content: content
    })
  },
  setStorageData(key, value= '', fun){
    wx.setStorage({
      key: key,
      data: value,
      success(){
        fun && fun()
      }
    })
  },
  getStorageData(key, fun){
    wx.getStorage({
      key: key,
      success(res) {
        fun && fun()
      }
    })
  },
  // 模拟从后端获取数据
  request(option){
    let {url, data, header, method, dataType, mock = false} = option;
    let self = this;
    return new Promise((resolve, reject) => {
      if(mock){ //测试环境，传mock
        let res = {
          statusCode: 200,
          data: Mock[url]
        }
        if(res && res.statusCode == 200 && res.data){
          // 成功
          resolve(res.data);
        }else{
          // res 为空 报错
          self.alert('提示', res);
          reject(res);
        }
      }else{//开发环境 不传mock 默认为false
        // 使用本地的模拟数据
        wx.request({
          url: url,
          data: data,
          header: header,
          method: method,
          dataType: dataType,
          success(res){
            if (res && res.statusCode == 200 && res.data){
              resolve(res);
            }else{  //获取的数据有问题
              self.alert('提示', res);
              reject(res);
            }
          },
          fail(err){  //该接口无法获取数据
            self.log(err);
            self.alert('提示', err);
            reject(err);
          }
        })
      }
    })
  }

}

export default util;