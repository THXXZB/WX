//index.js
const app = getApp()

Page({
  data: {
    
  }, 
  start: function () {
    wx.navigateTo({
      url: '/pages/detect/index',
    })
  },
  onLoad: function() {
    if (app && app.globalData && app.globalData.userInfo){
      this.setUserInfo(app.globalData);
    }
  },
  setUserInfo(info){
    this.setData({
      userInfo: info ? info.userInfo : null
    });
    app.globalData.userInfo = this.data.userInfo
  },
  getUserInfo(e){
    try{
      let info = null;
      console.log(e);
      if(e && e.detail && e.detail.userInfo){
        let {detail: {userInfo}} = e; //解构
        info = {
          userInfo:{
            nickname: userInfo.nickName,
            city: userInfo.city,
            avatarUrl: userInfo.avatarUrl
          }
        }
        this.setUserInfo(info);
      }
    }catch(e){
      console.log(e);
      wx.showToast({
        title: '登录失败，请重试',
        icon: 'none',
        mask: true
      })
    }
  },
  onGetOpenid: function() {
    
  },

  
})
