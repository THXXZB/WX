// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: false,
    carts: [ ],
    selectAllStatus: true,
    totalPriice:''
  },
  /**
   * 计算购物车总价格
   */
  getTotalPrice(){
    let carts = this.data.carts;
    let total = 0;
    // console.log(carts);
    for(let cart of carts){
      console.log(cart);
      if(cart.selected){
        total += cart.price * cart.num;
      }
    }
    // console.log(total);
    this.setData({
      // 保留两位小数
      totalPrice: total.toFixed(2)
    })
  },
  /**
   * select 选择点击事件
   */
  selectList(e){
    console.log(e);
    let index = e.currentTarget.dataset.index;
    // 修数组中的值 ！！！
    let selected = `carts[${index}].selected`;
    // console.log(selected);
    // console.log(this.data.carts[index].selected);
    this.setData({
      [selected]: !this.data.carts[index].selected
    });
    this.getTotalPrice();
    let carts = this.data.carts;
    for(let cart of carts){
      if(!cart.selected){
        this.setData({
          selectAllStatus: false
        })
        return;
      }
    }
    this.setData({
      selectAllStatus: true
    })
  },
  /**
   * 全选 点击事件
   */
  selectAll(e){
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;
    for(let cart of carts){
      cart.selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    })
    this.getTotalPrice();
  },
  /**
   * delete 删除商品点击事件
   */
  deleteList(e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);
    this.setData({
      carts: carts
    })
    if(!this.data.carts.length){
      this.setData({
        hasList: false
      })
    }else{
      this.getTotalPrice();
    }
  },
  /**
   * 增加商品数量
   */
  add(e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts[index].num++;
    this.setData({
      carts: carts
    })
    this.getTotalPrice();
  },
  /**
   * 减少商品数量
   */
  reduce(e) {
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts[index].num--;
    if (carts[index].num == 0){
      carts.splice(index, 1);
    }
    this.setData({
      carts: carts
    })
    
    this.getTotalPrice();
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
    // 模拟页面加载获取数据
    setTimeout(() => {
      this.setData({
        hasList: true,
        carts: [
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 4, price: 0.03, selected: true }
        ]
      })
      // console.log(this.carts);
      this.getTotalPrice();
    }, 1000);
    
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