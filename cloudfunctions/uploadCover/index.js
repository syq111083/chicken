const cloud = require('wx-server-sdk')
const fs = require('fs')
const path = require('path')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  console.log(event)
  let buffer = new Buffer.from(event.fileContent,"base64")
  cloud.uploadFile({
    cloudPath: event.cloudPath,
    fileContent: buffer,
  }).then( res => {
    console.log(res)
  }).catch( err => {
    console.log(err)
  })
  return {
    "kkk":"能看到说明没问题",
  }
}