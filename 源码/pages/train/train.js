// pages/train/train.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    startAddress:'福州',
    endAddress:'福州南',
    bannerList:[
      '/images/banner1.png',
      '/images/banner2.png',
      '/images/banner3.png',
    ],
    bannerHeight:0,
  },
  starAddress(){
    // console.log('start');
    wx.navigateTo({
      url: '/pages/addressCheck/addressCheck?status=start',
    })
  },
  endAddress(){
    // console.log('end');
    wx.navigateTo({
      url: '/pages/addressCheck/addressCheck?status=end',
    })
  },  
  queryTrain(){ //车票详情页
    console.log('sss');
    const startAddress=this.data.startAddress;
    const endAddress=this.data.endAddress;
    wx.navigateTo({
      url: `/pages/detail/detail?startAddress=${startAddress}&endAddress=${endAddress}`,
    })
  },
    /* 获取屏幕宽度 设置banner高度 */
    getBannerHeight(){
      const screenWidth=wx.getWindowInfo().screenWidth
      let bannerHeight=(screenWidth-20)*120/350;
      this.setData({
        bannerHeight:bannerHeight
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBannerHeight();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var that =this;
    //读取本地缓存
    wx.getStorage({
      key: "startName",
      success(res) {
        // console.log('getStart'+res);
        that.setData({
          startAddress:res.data
        })
      }
    })
    wx.getStorage({
      key: "endName",
      success(res) {
        // console.log('getEnd'+res);
        that.setData({
          endAddress:res.data
        })
      }
    })
  },
})