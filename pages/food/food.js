// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    host:'http://a.itying.com/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData();
  },
  requestData(){
    var that = this;
    wx.request({
      url: 'http://a.itying.com/api/productlist',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        //替换斜杠
        var arr = res.data.result;
        for (var i = 0; i < arr.length;i++)
        {
          for(var j = 0; j < arr[i].list.length; j++)
          {
            arr[i].list[j].img_url = arr[i].list[j].img_url.replace(/\\/g,'/');
          }
        }
        //this指向
        that.setData({
          list:arr
        })
       },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  gofoodContent(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../foodContent/foodContent?id='+id
    })
  }
})