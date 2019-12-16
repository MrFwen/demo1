// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 跳转到日志页面
   * 跳转到二级页面
   */
  goNews() {
    wx.navigateTo({
      url: '../shop/shop'
    })
  }
})