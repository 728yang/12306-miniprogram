// pages/addressCheck/addressCheck.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:{
      commonList:['福州','福州南','莆田','仙游','涵江','厦门','厦门北','北京','上海'],
      hotList:['深圳','汕头','广州','南京','苏州','南昌','九江','杭州','绍兴']
    },
    status:null
  },
  //选择地址
  goTrain(e){
    const addressName=e.target.dataset.address_name;
    const status=this.data.status
    // console.log('====>'+status);
    if(status=='start'){
      wx.setStorage({
        key:"startName",
        data:addressName
      })
    }else{
      wx.setStorage({
        key:"endName",
        data:addressName
      })
    }
    // console.log('addressName',addressName);
    wx.switchTab({
      url: `/pages/train/train`,
    })
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      status:options.status
    })
  },
})