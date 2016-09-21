/**
 * Created by YC on 2016/9/21.
 */

var express=require("express");     //引入模块express
var cookieparser=require("cookie-parser");    //引入模块cookie-parser
var bodyparser=require("body-parser");      //引入模块body-parser

var app=express();
app.use(express.static(__dirname));
app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieparser());    //启用cookie

app.post("/userLogin",function(req,res){
   if(req.body.uname=="yc" && req.body.pwd=="123"){   //服务器向客户端中添加cookie
       res.writeHead(200,"OK",{"Set-cookie":"uname=yc;expires=Wed,21-Sep-16 12:00:00 GMT;"});

       res.end("1");    //说明登录成功，则保存到cookie中
   }else{
       res.send("0");  //说明登录失败，不保存到cookie中
   }

    //服务器端获取客户端传过来的cookie信息
    for(var key in req.cookies){
        console.info(key+":"+req.cookies[key]);
    }
});

app.listen(6868,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("服务器启动成功.......");
    }
});
