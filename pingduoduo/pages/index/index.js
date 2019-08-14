//index.js
//获取应用实例
const app = getApp()
const db = require("../../assets/db.js")
Page({
  data: {
    productSorts: db.productSorts || [],
    currentSortId: 0
  },
  
  onLoad: function () {
  }
})
