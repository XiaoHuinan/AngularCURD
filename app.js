var express = require('express');

// 引入核心模块path路径
var path = require('path');
// 引入第三方图标中间件
var favicon = require('serve-favicon');
// 引入第三方包morgan，打印请求状态日志中间件
var logger = require('morgan');
// 引入第三方包cookie-parser，解析cookie
var cookieParser = require('cookie-parser');
// 引入第三方包body-parser，解析请求体；
var bodyParser = require('body-parser');

// 引入自定义路由中间件
var routes = require('./routes/index');
var users = require('./routes/users');

// 定义一个服务器应用
var app = express();

// view engine setup
// 配置视图模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// 挂载图标中间件
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(favicon(__dirname + '/public/favicon.ico'));
// 挂载打印请求日志的中间件
app.use(logger('dev'));
// 解析json格式的请求体
app.use(bodyParser.json());
// 解析form表单提交时的请求体
app.use(bodyParser.urlencoded({ extended: false }));
// 挂载cookie-parser中间件
app.use(cookieParser());
// 挂载内置static中间件，作用是布置静态页面
app.use(express.static(path.join(__dirname, 'public')));



// 挂载自定义路由中间件（自定义路由中间件挂载到这个 地方）
app.use('/', routes);
app.use('/users', users);






// 下面的用express脚手架工具生成的中间件，作用是处理请求错误的
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// 输出app服务器应用，让bin目录下的www文件开启端口监听
module.exports = app;
