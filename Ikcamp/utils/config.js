'use strict'; //严格模式
// 开发环境 dev -> develop
const env = 'dev';
// 弹窗信息
const defaultAlertMessage = '发什么了什么_(¦3」∠)_';
// 分享标题
const defaultShareText = {
  en: 'ikcamp英语学习口语听力四六级'
};
const defaultBarTitle = {
  en: 'ikcamp英语学习'
};
const defaultImg = {
  articleImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
  coverImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
};
// isPriduction 生产环境
let core = {
  env: env,
  defaultAlertMessage: defaultAlertMessage,
  defaultImg: defaultImg,
  defaultShareText: defaultShareText['en'],
  defaultBarTitle: defaultBarTitle['en'],
  isDev: env === 'dev',
  isPriduction: env === 'production'
}
export default core;