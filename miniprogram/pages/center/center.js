// miniprogram/pages/center/center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "avater":null,
    "nickname":null,
    "openid":null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let instance = getApp()
    let avater = instance.globalData.userInfo.avatarUrl
    let openid = instance.globalData.openid
    if (avater === null) {
      wx.switchTab({
        url:"/pages/main/main"
      })
    }
    let nickname = instance.globalData.userInfo.nickName
    this.setData({
      avater:avater,
      nickname:nickname,
      openid:openid
    })
    // console.log(instance.globalData.userInfo.avatarUrl)
    // console.log(that.data)
    console.log(this.data.avater)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})