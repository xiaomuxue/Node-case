/**
 * Created by YC on 2016/9/21.
 */

var express=require("express");
var fs=require("fs");
var multer=require("multer");

var upload=multer({dest:'uploads/'});
var app=express();

app.use(express.static(__dirname));

app.post("/uploadFile",upload.array("file"),function(req,res,next){
   if(req.files==undefined){
       res.send();
   }else{
       for(var i=0;i<req.files.length;i++){
           var path=__dirname+"/uploads/"+req.files[i].originalname;
           fs.renameSync(req.files[i].path,path);
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

