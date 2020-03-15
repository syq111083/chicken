//app.js
App({
  data: {
    "userInfo": {},
    "openid": wx.getStorage({
      key: 'openid',
      success: function(res) {},
    })
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
        console.log("看看有没有code:", res)
        wx.cloud.callFunction({
          name: 'login',
        }).then(result => {
          // output: res.result === 3
          console.log("正常信息", result)
          wx.setStorage({
            key: 'openid',
            data: result.result.openid,
          })
            console.log(that.data)
            that.data.openid = result.result.openid
        }).catch(err => {
          // handle error
          console.log("错误信息：", err)
        })
      }
    })
  }
})
