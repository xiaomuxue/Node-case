/**
 * Created by YC on 2016/9/20.
 */

//var app=require("express")();
var express=require("express");
var querystring=require("querystring");
var app=express();      //通过express模块创建一个应用程序对象
//中间件static用于get请求，请求的东西直接显示出来
app.use( express.static(__dirname) );    //指定这个应用程序使用express模块中的static中间件，并指定一定当前服务器文件所在的目录为基址（app_2.js）

//body-parser中间件   用于post请求
app.use( bodyParser.urlencoded() );

app.get("/userLogin",function(req,res){
   // console.info(req.params );
  /*  var urlstr=req.url;
    urlstr=urlstr.replace("/?","");
    var obj=querystring.parse( urlstr );
    console.info( obj );  */

    console.info( req.url );     //因为get请求方法的用户名和密码都是拼在地址栏处，所以地下使用query可以获取到，post方法就不行
    console.info( req.query );   //获取请求中的查询字符串，即请求中的数据
    res.send();
});

app.post("/userLogin",function(req,res){
    console.info(req.body);     //post方法必须使用body，才可以获取到内容
    res.send();
});

//static中间件   的方式可以代替下面方法
/*
app.get("/*",function(req,res){
    console.info( req.url+" ======== ");
    res.sendfile(__dirname+req.url);
});   */



app.listen(80,function(err){
    if(err){
       console.info(err);
    }else{
        console.info("应用程序启动成功.....");
    }
});
