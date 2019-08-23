# AI-人像识别

AI 能力由腾讯云提供
小程序可以使用云端服务器 tcb
wx.cloud.callFunction

- AI 计算  有经验
- app.js 共享全局数据（用户登录信息，应用配置）
  高于page 被所有的page共享
- userInfo
  button[opentype="getUserInfo"]
  首次询问用户授权 授权后可直接获取用户信息
- 登录持久化 
  userInfo wx.setStorage()
- 云开发
  wx.cloud.database sdk
- 上传图片
  1. 选择

