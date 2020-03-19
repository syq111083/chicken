// miniprogram/pages/addressModify/addressModify.js
let area = require('../../area.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    // areaList:
    // {
    //   province_list: {
    //   },
    //   city_list: {
    //   },
    //   county_list: {
    //   }
    // },
    areaList: area.default,
    city: [],
    showProvince: false,
    username: null,
    telephone: null,
    street: null,
    province: null
  },

  setPhone(res) {
    this.setData({
      telephone: res.detail
    })
  },

  setStreet(res) {
    this.setData({
      street: res.detail
    })
  },

  setName(res) {
    this.setData({
      username: res.detail
    })
  },

  add() {
    console.log("add:",this.data.city)
    const db = wx.cloud.database()
    const collection = db.collection('address')
    let openid = getApp().data.openid
    wx.getStorage({
      key: 'openid',
      success: function (res) { console.log(res)
      openid = res.data
       },
    })
    console.log(this.data.city, openid, this.data.username, this.data.telephone, this.data.street)
    collection.add({
      data: {
        openid: openid,
        city: this.data.city,
        street: this.data.street,
        username: this.data.username,
        phone: this.data.telephone
      }
    }).then(
      res => {
        console.log(res)
      }
    ).catch(
      err => {
        console.log(err)
      }

    )
    wx.navigateBack({
      
    })
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  getCode(res) {
    console.log(res.detail.values)
    let cities = res.detail.values
    let name = []
    for (let i = 0; i < cities.length; i++) {
      name.push(cities[i].name)
    }
    console.log(name)
    this.setData({
      city: name,
      showProvince: true
    })
    this.onClose()
  },

  areaChange() {
    
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'test-erko4',
        traceUser: true,
      })
    }

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("area:",area)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("看看响应:", this.data.province)
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