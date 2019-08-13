// pages/stories/index.js
const db = require("../../assets/db.js")
let currentVideo = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories: db.stories || [],
    currentVId: null
  },
  // 播放
  play: function(event){
    if(currentVideo){
      currentVideo.pause();
    }
    const vId = event.target.dataset.id;
    if(vId){
      // 根据id创建一个操作视频的对象
      // console.log(vId);
      currentVideo = wx.createVideoContext('' + vId);
      currentVideo.play();
      currentVideo.sendDanmu({
        text: '666',
        color: '#f00'
      });
      this.setData({
        currentVId: vId
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