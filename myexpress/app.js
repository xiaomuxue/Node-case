/**
 * Created by YC on 2016/9/17.
 */
/*
var express=require("express");
var app=express();
*/
var app=require("express")();

/*app.get("/",function(req,res){
    res.writeHead(200,"OK", {"Content-Type":"text/html;charset=utf-8"});
    res.write("访问成功.....");
    res.end();
});*/

app.get("/",function(req,res){
    res.send("访问成功....");     //不用写它的end结束，自动带有
    res.sendFile(__dirname+"/index.html");      //必须是绝对路径
});

app.listen(6868,function(err){
   if(err){
       console.log(err);
   }else{
       console.log("服务器启动成功.....");
   }
});
