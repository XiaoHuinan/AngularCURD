/**
 * Created by cena on 2016/4/18.
 */
// 引入需要的模块
var express = require('express'),
    router = express.Router(),
    product = require('../models/product');
    
// 测试是否进入
router.get('/pro/', function (req, res,next) {
    //console.log(req.param('name'))
    console.log(323232)
    next();
});
// 测试是否接收到了参数
//router.get('/pro/:phone', function (req, res) {
//    console.log(req.param('phone'))
//    //res.end("呵呵")
//});
//get请求+id 查询单个产品信息
router.get('/pro/:phone', function (req, res) {
    console.log(req.param('phone'))
    product.getProByid(req.param('phone'), function (err, pro) {
        res.json(pro[0]);
        console.log(123)
        console.log(pro)
    })
});
// delete请求删除单条数据
//router.delete('/pro/:phone', function (req, res) {
//    product.deletProByid(req.params.id, function (err, data) {
//        if (err) return next(err);
//        res.json({success: "true"});l
//    })
//});
//put请求去修改产品信息
//router.put('/pro/:phone', function (req, res, next) {
//    //先查询出这条数据
//    product.getProByid(req.params.id, function (err, pro) {
//        if (err) return next(err);
//        if (pro)
//            var proObj = pro[0];
//        //拼接要修改的数据
//        if (req.params.price) {
//            proObj.price = req.params.price;
//            console.dir(proObj.price);
//        }
//        //进行数据修改
//        product.updateProByid(proObj, function (err) {
//            if (err)res.json({error: err});
//            res.json({success: "true"});
//        });
//    })
//});
//通过post请求去新增数据
//router.post('/pro', function (req, res, next) {
//    console.log(req.body);
//    var pro = new product({
//        photo  : req.body.photo?req.body.photo:'',
//        price  : req.body.price?req.body.price:'',
//        describe : req.body.describe?req.body.describe:'',
//        name : req.body.name?req.body.name:''
//})
//    product.savePro(pro,function(err,data){
//        if (err)res.json({error: err});
//        res.json({success: "true"});
//
//    })
//});
module.exports = router;
