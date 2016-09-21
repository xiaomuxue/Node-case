/**
 * Created by YC on 2016/9/17.
 */

var app=require("express")();      //把包导进来，就可以直接使用
//使用路由功能   在路由中使用正则表达式
app.get("/index.html/:id(\\d+)/:name?",function(req,res){       //id（\\d+）表示id必须是数字
    console.info(req);
    var str="";
    for(var key in req.params){
        if(str!=""){
            str+="<br/>"
        }
        str+="参数名："+key+"参数值："+req.params[key].toString();
    }
    res.send(str);    //将用户提交的数据返回给用户
});

app.listen(6868,function(err){      //6868监听端口，使其他
   if(err){
       console.info(err);
   }else{
       console.info("服务器启动成功....");
   }
});

//访问：http://127.0.0.1:6868/index.html/1001/源辰