// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start:'null',
    end:'null',
    orderList:null,
    flag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('options',options);
    var that =this;
    const start=options.startAddress;
    const end  =options.endAddress;
    this.setData({
      start:start,
      end:end
    })
    wx.getStorage({  
      key: 'orderList',  
      success(res) {  
        // 转换回对象  
        let obj = JSON.parse(res.data);  
        console.log('取出的对象', obj);  
        let tempList=[]
        tempList.push(obj)
        that.setData({
          orderList:tempList,
          flag:true
        })
        console.log('a',that.data.flag);
        console.log('orderList',that.data.orderList);
      }
    });
    console.log('aa',that.data.flag);
  },
})