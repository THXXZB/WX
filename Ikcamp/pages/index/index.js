//index.js
'use strict';
import util from '../../utils/index.js';
import config from '../../utils/config.js';
// 获取微信小程序的应用实例
let app = getApp();
let isDEV = config.isDev;

let handler = {
  data: {
    page: 1, //当前页数
    pageSize: 4, //页面容纳量
    days: 3,
    totalSize: 0,
    hasMore: true,   //判断是否还有数据
    articleList: [], //用来存放文章列表数据
    defaultImg: config.defaultImg
  },
  onLoad() {
    this.requestArticle();
    console.log(new Date());

  },
  requestArticle() {
    util.request({
      url: 'list',
      mock: true,
      data: {
        tag: '微信热门',
        start: this.data.page || 1,
        days: this.data.days || 3,
        pageSize: this.data.pageSize,
        langs: config.appLang || 'en'
      }
    }).then(res => {
      if (res && res.status === 0 && res.data && res.data.length) {
        // 数据获取成功
        let articleData = res.data;
        // 格式化原始数据中的date
        let formateData = this.formateArticleData(articleData);
        this.renderArticle(formateData);
        util.log(formateData);
      }else if(this.data.page === 1 && res.data.length === 0){
        // 没有数据
        util.alert();
      }else if(this.data.page !== 1 && res.data.length === 0){
        // 没有更多数据
        this.setData({
          hasMore: false
        })
      }else{
        util.alert('提示', res);
        this.setData({
          hasMore: false
        })
        return null;
      }
    })
  },
  // 数据格式转换
  // 日期'2019-08-16' -> '今日'
  // '2019-08-15' -> '08月15日'
  // '2018-08-15' -> '2018年08月15日'
  dateConvert(dateStr){
    if(!dateStr){
      return '';
    }
    // 获取今天的日期
    let today = new Date(),
        todayYear = today.getFullYear(),
        todayMonth = ('0' + (today.getMonth() + 1)).slice(-2),
        todayDay = ('0' + today.getDate()).slice(-2);

    // 去除时分秒
    // dateStr = dateStr.split(' ')[0];
    let convertStr = '';
    let originYear = +dateStr.slice(0, 4);
    let todayFormat = `${todayYear}-${todayMonth}-${todayDay}`;
    if(dateStr === todayFormat){
      convertStr = '今日'
    }else if(originYear < todayYear){
      let splitStr = dateStr.split('-');
      convertStr = `${splitStr[0]}年${splitStr[1]}月${splitStr[2].slice(0,2)}日`
    }else{
      // 时间出错误或今年 2020-08-10 / 2019-08-10  -> 08月10日
      convertStr = dateStr.slice(5).replace('-', '月') + '日';
    }
    return convertStr;
  },
  // 格式化article中的date
  formateArticleData(data){
    let formatData = undefined;
    if(data && data.length){
      // group 为数组中的每一项
      formatData = data.map((group) => {
        group.formateData = this.dateConvert(group.date);
        return group;
      })
    }
    return formatData;
  },
  // 渲染数据
  renderArticle(data){
    if(data && data.length){
      // 原始数据与新数据拼接
      let newList = this.data.articleList.concat(data);
      this.setData({
        articleList: newList,
        hiddenLoading: true
      })
    }
  },
  onReachBottom(){
    if(this.data.hasMore){
      let nextPage = this.data.page + 1;
      this.setData({
        page: nextPage
      })
      this.requestArticle();
    }
  }
}

Page(handler)
