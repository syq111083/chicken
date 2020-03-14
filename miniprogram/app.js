//app.js
App({
  data: {
    "userInfo": {},
    "openid":null
  },
  onLaunch: function () {
    let that = this
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

    wx.login({
      success(res) {
        console.log("看看有没有code:",res)
        wx.cloud.callFunction({
          name: 'login',
          data: {},
        }).then(result => {
          // output: res.result === 3
          console.log("正常信息",result)
          that.globalData.openid = result.result.openid

        }).catch(err => {
          // handle error
          console.log("错误信息：",err)
        })
      }
    })

    this.globalData = {}
    wx.authorize({
      scope: "scope.userInfo",
      success(res) {
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        wx.getUserInfo({
          success: function (res) {
            var userInfo = res.userInfo
            var nickName = userInfo.nickName
            var avatarUrl = userInfo.avatarUrl
            var gender = userInfo.gender //性别 0：未知、1：男、2：女
            var province = userInfo.province
            var city = userInfo.city
            var country = userInfo.country
            that.globalData.userInfo = userInfo
          }
        })
      }
    })
  }
})
