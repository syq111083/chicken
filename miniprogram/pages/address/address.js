// miniprogram/pages/address/address.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    address: null
  },

  navigate() {
    wx.navigateTo({
      url: '/pages/addressModify/addressModify',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.cloud.init({
      // env 参数说明：
      //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
      //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
      //   如不填则使用默认环境（第一个创建的环境）
      env: 'test-erko4',
      traceUser: true,
    })
    const openid = getApp().data.openid
    const db = wx.cloud.database()
    const collection = db.collection('address')
    collection.where({
      _openid: openid
    }).get().then(res => { 
      console.log(res) 
      this.setData({
        address:res.data
      })
      }).catch(err => { console.log(err) })

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