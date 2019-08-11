// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {
      name: '',
      phone: '',
      detail:''
    }
  },
  /**
   * 姓名
   */
  bindName(e){
    console.log(e);
    this.setData({
      'address.name': e.detail.value
    })
  },
  /**
   * 电话
   */
  bindPhone(e){
    this.setData({
      'address.phone': e.detail.value
    })
  },
  /**
   * 详细地址
   */
  bindDetail(e){
    this.setData({
      'address.detail': e.detail.value
    })
    // console.log('详细地址',this.address.detail);
  },
  /**
   * 提交事件
   */
  formSubmit(){
    // 确保信息填写完整
    if(this.data.address.name && this.data.address.phone && this.data.address.detail){
      // 本地存储
      wx.setStorage({
        key: 'address',
        data: this.data.address,
        success: (result) => {
          // 成功则跳转回上一个页面
          wx.navigateBack({
            
          });
        },
        fail: () => {
          // 失败
        },
        complete: () => {
          //无论失败or成功
        }
      })
    }else{
      wx.showModal({
        title: '温馨提示',
        content: '你还没有写完^(*￣(oo)￣)^',
        showCancel: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})