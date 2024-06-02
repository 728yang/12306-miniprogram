// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList:[
      {id:1,start:'null',end:'null',price:'￥599',startTime:'12:15',endTime:'18:59',origin:'北京南',destination:'上海虹桥',time:'06时09分',plateNumber:'G135',class1:'20张',class2:'有',class3:'有'},
      {id:2,start:'null',end:'null',price:'￥129',startTime:'13:20',endTime:'18:59',origin:'西藏',destination:'浙江',time:'06时09分',plateNumber:'G166',class1:'1张',class2:'有',class3:'有'},
      {id:3,start:'null',end:'null',price:'￥602',startTime:'14:15',endTime:'18:59',origin:'海南',destination:'杭州',time:'06时09分',plateNumber:'D1235',class1:'25张',class2:'有',class3:'有'},
      {id:4,start:'null',end:'null',price:'￥599',startTime:'14:50',endTime:'18:59',origin:'河北',destination:'义乌',time:'06时09分',plateNumber:'G650',class1:'有',class2:'有',class3:'有'},
      {id:5,start:'null',end:'null',price:'￥599',startTime:'15:15',endTime:'18:59',origin:'山东',destination:'福州',time:'06时09分',plateNumber:'K126',class1:'30张',class2:'有',class3:'有'},
      {id:6,start:'null',end:'null',price:'￥599',startTime:'15:30',endTime:'18:59',origin:'北京南',destination:'上海虹桥',time:'06时09分',plateNumber:'G286',class1:'15张',class2:'有',class3:'有'},
      {id:7,start:'null',end:'null',price:'￥599',startTime:'12:15',endTime:'18:59',origin:'北京南',destination:'上海虹桥',time:'06时09分',plateNumber:'G135',class1:'29张',class2:'有',class3:'有'},
      {id:8,start:'null',end:'null',price:'￥599',startTime:'12:15',endTime:'18:59',origin:'北京南',destination:'上海虹桥',time:'06时09分',plateNumber:'G135',class1:'无',class2:'有',class3:'有'},
    ],
    start:'null',
    end:'null'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    const start=options.startAddress;
    const end  =options.endAddress;
    this.setData({
      start:start,
      end:end
    })

    wx.setNavigationBarTitle({
      title: `${start}-${end}`,
   })

    this.data.detailList.forEach((item,index) => {
      this.setData({
        [`detailList[${index}].start`]:start,
        [`detailList[${index}].end`]:end
      })
    });
  },
  buyFare(e){
    console.log('buy',e);
    const orderId=e.target.dataset.id
    for(let i=0;i<this.data.detailList.length;i++){
      if(this.data.detailList[i].id==orderId){
        // 转换为字符串  
        let objStr = JSON.stringify(this.data.detailList[i]);
        wx.setStorage({  
          key: 'orderList',  
          data: objStr,  
          success(res) {  
            // console.log('对象存储成功', res);  
          }  
        });  
        break;
      }
    }
    var that =this;

    wx.showToast({
      title: '订票成功',
      icon: 'success',
      duration: 2000,
    }).then(
      setTimeout(() => {
        wx.showToast({
          title: '正在跳转订单页',
          icon: 'loading',
          duration: 3000,
          success:()=>{
            setTimeout(() => {
              wx.navigateTo({
                url: `/pages/order/order?start=${that.data.start}&end=${that.data.end}`,
              })
            }, 1000);
          }
        })
      }, 800)
    ) 
  }
})