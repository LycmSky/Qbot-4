const { createClient } = require("oicq")
// const nodemailer  = require('nodemailer');

const config = require("../tconfig")

// const mailTransport = nodemailer.createTransport(config.email.nodemailerConfig);

const bot = createClient(config.account, config.botConfig)

/*
bot.on("system.login.qrcode", function() {
    // 收到二维码的事件函数
    mailTransport.sendMail({
        from: config.email.sendConfig.from,
        to: config.email.sendConfig.to,
        subject: "Qbot登录二维码",
        text: '请使用 手机QQ 扫描二维码',
        html: '<img src="cid:00000001"/>',
        attachments: [
            {
                filename: 'qrcode.png',
                path: `./src/data/${config.account}/qrcode.png`,
                cid: '00000001'
            }
        ]
    })
}).login()
*/

bot.on("system.login.qrcode", function() { // 监听收到二维码的事件
    process.stdin.once("data", () => {
        this.login(); //扫码后按回车登录
      });
}).on("system.login.slider", function (event) { //监听滑动验证码事件
    process.stdin.once("data", (input) => {
      this.sliderLogin(input); //输入ticket
    });
}).on("system.login.device", function (event) { //监听登录保护验证事件
    process.stdin.once("data", () => {
      this.login(); //验证完成后按回车登录
    });
}).login(config.passwd);

exports.bot = bot

// template plugins
require("./plugin/hello") //hello world

process.on("unhandledRejection", (reason, promise) => {
	console.log('Unhandled Rejection at:', promise, 'reason:', reason)
})