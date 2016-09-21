/**
 * Created by YC on 2016/9/20.
 */
var express=require("express");
var bodyparser=require("body-parser");
var fs=require("fs");

var app=express();     //创建一个应用程序
app.use( bodyparser.urlencoded({extended:false}) );    //设置这个应用程序使用body parser中间件
app.use(express.static(__dirname));

app.post("/uploadPhoto",function(req,res){   //处理请求地址为/uploadPhoto的post请求
    //console.info(req.body.imageData);
    var bitmap=new Buffer(req.body.imageData,"base64");

    fs.writeFile("./images/"+new Date().getTime()+".png",bitmap,function(err){
        if(err){
            res.send("0");
        }else{
            res.send("1");
        }
    });
});

app.get("/getAllPhoto",function(req,res){    //获取所有的photo
    //获取images文件夹下的所有文件
    fs.readdir("./images",function(err,files){
        if(err){
            res.send("0");
        }else{
            res.send(files);
        }
    });
});

app.listen(8888,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("应用程序启动成功.....");
    }
});