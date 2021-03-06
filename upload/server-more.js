/**
 * Created by YC on 2016/9/21.
 */

var express=require("express");  //创建应用程序
var fs=require("fs");    //操作文件使用的
var multer=require("multer");    //文件上传模块

var upload=multer({dest:'uploads/'});   //指定文件上传的目录
var app=express();       //创建一个应用程序

app.use(express.static(__dirname));     //使用静态中间件

app.post("/uploadFile",upload.array("file"),function(req,res,next){
   if(req.files==undefined){   //说明用户没有选择图片
       res.send();
   }else{
       for(var i=0;i<req.files.length;i++){
           var path=__dirname+"/uploads/"+req.files[i].originalname;
           fs.renameSync(req.files[i].path,path);     //重命名
       }
       res.send( "图片上传成功......" );
   }
});

app.listen(8080,function(err){
    if(err){
        console.info(err);
    }else{
        console.info("服务器启动成功......");
    }
});





