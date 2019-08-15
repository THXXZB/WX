// pages/index/home/home.js
const db = require("../../../assets/db.js")
Component({

  /**
   * 页面的初始数据
   */
  data: {
    banners: db.banners || [],
    actives: db.actives || [],
    products: db.products || [],
    activesWrapWidth: '0',
    activesItemWidth: '0',
    progressLineWidth: '0',
    progressLineMarginLeft: 0
  },
  
  ready: function () {
    // actives 窗口宽度正好容纳5个
    // 共显示两行
    let that  = this;
    console.log(this.data.products)
    // console.log('ready');
    wx.getSystemInfo({
      success: function (res) {
        const actives = 5;
        let proportion = 1 / actives;
        that.setData({
          activesItemWidth: res.windowWidth * proportion + 'px',
          activesWrapWidth: res.windowWidth * proportion * (that.data.actives.length) / 2 + 'px',
          progressLineWidth: actives / (that.data.actives.length / 2) * 100 + '%'
        })
        // console.log(that.data.progressLineMarginLeft);
      },
    })
  },

  methods:{
    scrollView: function(e){
      // console.log(e);
      
      this.setData({
        progressLineMarginLeft: e.detail.scrollLeft / e.detail.scrollWidth * 100 + '%'
      })
      // console.log(this.data.progressLineMarginLeft)
    }
  },

})