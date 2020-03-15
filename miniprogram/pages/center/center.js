// miniprogram/pages/center/center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "avatar": null,
    "nickname": null,
    "openid": null,
    "isLogin": wx.getStorage({
      key: 'isLogin',
      success: function (res) {
        console.log("看看登陆成功了没有", res)
      },
    })
  },
  getuserinfo: function (e) {
    var appInstance = getApp()
    let userInfo = e.detail.userInfo
    let avatar = String(userInfo.avatarUrl)
    let nickname = String(userInfo.nickName)
    wx.setStorage({
      key: "avatar",
      data: avatar,
      success: function (res) {
        console.log("设置头像缓存成功:", res)
      },
      fail: function (res) {
        console.log("设置头像缓存失败:", res)
      }
    })
    wx.setStorage({
      key: "nickname",
      data: nickname,
      success: function (res) {
        console.log("设置昵称缓存成功:", res)
      },
      fail: function (res) {
        console.log("设置昵称缓存失败:", res)
      }
    })
    wx.setStorage({
      key: "isLogin",
      data: true,
      success: function (res) {
        console.log("设置登陆状态缓存成功:", res)
      },
      fail: function (res) {
        console.log("设置登陆状态缓存失败:", res)
      }
    })
    this.setData({
      avatar: userInfo.avatarUrl,
      nickname: userInfo.nickName,
      isLogin: true,
      openid: appInstance.data.openid
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    let that = this
    wx.getStorage({
      key: 'isLogin',
      success: function (res) {
        console.log("看看登陆成功了没有", res)
        that.setData({
          isLogin: true
        })
      },
      fail: function (res) {
        console.log("状态转换失败", res)
      }
    })
    wx.getStorage({
      key: 'avatar',
      success: function (res) {
        console.log("读取本地缓存", res)
        that.setData({
          avatar: res.data
        })
      },
      fail: function (res) {
        console.log("读取缓存失败", res)
      }
    }),
      wx.getStorage({
        key: 'nickname',
        success: function (res) { 
          that.setData({
            nickname: res.data
          })
        },
      }),
      wx.getStorage({
        key: 'openid',
        success: function (res) { 
          that.setData({
            openid: res.data
          })
        },
      }),
      wx.getStorage({
        key: 'isLogin',
        success: function (res) {
          console.log("看看登陆成功了没有", res)
        }
      })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

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