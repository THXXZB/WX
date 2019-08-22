// pages/index/sorts/sorts.js
const db = require("../../../assets/db.js")
Component({
  properties: {
    sortId: {
      type: Number,
      value: 1
    }
  },
  data: {
    menuList: [],
    products: []
  },
  ready: function () {
    this.setData({
      menuList: this.getMenuList(this.properties.sortId),
      products: this.getProducts(this.properties.sortId)
    });
    // console.log(this.data.menuList);
  },
  methods: {
    // 根据ID获取相应的数据
    getMenuList: function (sortId) {
      console.log(sortId)
      return db.menuList || [];
    },

    getProducts: function (sortId) {
      console.log(sortId)
      return db.products || [];
    }
  }
})