// app.js
App({
  onLaunch() {
     let that = this;
     // 登录
     wx.login({
        success: res => {
           // 发送 res.code 到后台换取 openId, sessionKey, unionId
           wx.request({
              url: that.globalData.server + 'login',
              method: 'POST',
              data: {
                 code: res.code
              },
              success: res => {
                 console.log('login:', res);
                 if(res.data.openid){
                    that.globalData.userInfo = res.data
                 }else{
                    console.log('登录失败');
                 }
              }
           })
        }
     })
  },
  globalData: {
     server: 'http://127.0.0.1:3000/',
     userInfo: {}
  }
})
