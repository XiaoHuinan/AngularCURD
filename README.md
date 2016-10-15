# 全栈项目：一个实现了CURD的SPA

## 介绍

* AngularJS实现了SPA

* NodeJS部署服务器，实现前后端交互

* 数据库选择MySQL


## 开发环境项目结构部署
 * bin
    + www   --实现判断监听端口

 * models 
    + db.js 
    + product.js 

 * node_modules   --文件依赖，允许npm install下载依赖文件

 * public -- Node部署静态文件资源
    + images
    + javascript
    + stylesheets
    + index.html

  * routes   --路由模块
    + index.js 
    + product.js
  
  * views 视图模板
  
  * app.js  --NodeJS入口文件   
  * package.json 文件依赖和Node配置文件
  

  
## 前端部分

  *

  *
  
  *


## 服务器部分
    
## 数据库端介绍
 * 首先要用MySQL在root用户名下建立一个xuxiaoxiang的数据库，建一个名为list的表
 
 * 创建链接
    + host : '127.0.0.1',
    + user : 'root',
    + password : '',
    + database : 'xuxiaoxiang'
 
 * 建表
    + list

 * 表的格式
    + 参数  数据类型  字节
    + name   char     10
    + phone  char     100
    + state  char     10