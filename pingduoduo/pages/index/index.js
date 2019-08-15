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
    let sortId = e.currentTarget.id;
    this.setData({
      currentSortId: sortId
    })
    console.log(this.data.currentSortId);
  },
  
  onReady: function(){
    let sortCompoent = this.data.productSorts;
    sortCompoent.shift();
    // console.log(sortCompoent);
    this.setData({
      sortCompoent: sortCompoent
    });
    // console.log(this.data.productSorts)
  }
})
