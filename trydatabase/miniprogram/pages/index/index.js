//index.js
const app = getApp()
const db = wx.cloud.database()
const productsCollection = db.collection('products')
Page({
  data: {
    products:[],
    page:0  //数据记录的数量
  },

  onLoad: function() {
    // lifecycle
    // 无限制，默认返回20条记录
    productsCollection.get().then(res => {
      console.log(res.data);
      this.setData({
        products: res.data
      })
    })
  },
  // 下拉刷新
  onPullDownRefresh(){
    productsCollection.get().then(res => {
      this.setData({
        page: 0,
        products: res.data
      }, res =>{
        wx.stopPullDownRefresh();
      })
    })
  },
  // 数据加载事件
  onReachBottom: function(){
    wx.showLoading({
      title: '加载',
    });
    let page = this.data.page + 20;
    // 跳过之前的20条,获取新的20条
    productsCollection.skip(page).get().then(res => {
      // 隐藏加载的弹窗
      wx.hideLoading();
      let new_data = res.data;
      let old_data = this.data.products;
      this.setData({
        page: page,
        products: old_data.concat(new_data)
      })
    });  
  }
})
