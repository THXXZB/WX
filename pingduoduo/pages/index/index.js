//index.js
//获取应用实例
const app = getApp()
const db = require("../../assets/db.js")
Page({
  data: {
    productSorts: db.productSorts || [],
    currentSortId: 0,
    sortCompoent : []
  },

  onLoad: function () {
  },

  // 分类点击事件
  changeSortId(e){
    console.log(e,this.data.currentSortId);
    let sortId = parseInt(e.currentTarget.id);
    if(sortId < 6){
      this.setData({
        currentSortId: sortId,
        scrollLeft: 0
      })
    }else{
      this.setData({
        currentSortId: sortId,
        scrollLeft: (sortId - 4.5) * (this.data.windowWidth / 7)
      })
    }
   
    // console.log("currentID"+this.data.currentSortId);
  },
  
  onReady: function(){
    let sortCompoent = this.data.productSorts;
    sortCompoent.shift();
    // console.log(sortCompoent);
    this.setData({
      sortCompoent: sortCompoent
    });
    let that = this;
    // console.log(this.data.sortCompoent)
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowWidth: res.windowWidth
        })
      }
    })
  }
})
