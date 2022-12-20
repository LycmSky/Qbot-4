/*
-id 复读群 ID
-m 复读内容
-t 复读次数
-s 复读间隔

.eoch -id 278836530 -m 132456789 -t 10 -s 10
*/

const { segment } = require("oicq")
const { bot } = require("../index")
const schedule = require('node-schedule')

const groupId = 278836530
const message = ""

bot.on("message", function (msg) {

	if (msg.raw_message === ".echo")
		msg.reply("123456", false) //改为false则不会引用
})

const  scheduleCronstyle = ()=>{
      schedule.scheduleJob('*/120 * * * * *',()=>{
        bot.sendGroupMsg(groupId, message)
        }); 
    }
  
scheduleCronstyle();
