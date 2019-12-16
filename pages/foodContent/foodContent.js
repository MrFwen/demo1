// pages/foodContent/foodContent.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    host: 'http://a.itying.com/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //获取上一个页面的传值
    this.requestData(options.id)
  },
  requestData(id){
    var that = this;
    var api = 'http://a.itying.com/api/productcontent?id='+id;
    wx.request({
      url: api,
      header: {'content-type':'application/json'},
      success: function(res) {
        var article = res.data.result[0].content;
        WxParse.wxParse('article', 'html', article, that,0)
        res.data.result[0].img_url = res.data.result[0].img_url.replace(/\\/g,'/');
        that.setData({
          list:res.data.result[0]
        })
      }
    })
  }

})