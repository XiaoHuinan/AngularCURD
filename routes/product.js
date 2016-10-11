/**
 * Created by cena on 2016/4/18.
 */
// 引入需要的模块
var express = require('express'),
    router = express.Router(),
    product = require('../models/product');

// 筛选页面获取嘉宾列表
router.get('/getlist', function (req, res,next) {
    console.log("请求已进入getlist");

    console.log('数据类型为'+req.query.state);
    // 不同页面的请求列表的逻辑
    if(req.query.state === "全部"){
        product.getAllList(function (err, pro) {
            res.json(pro);
        });
    }else{
        console.log("非全部");
        console.log(req.query.state);

        product.getProByState(req.query.state, function (err, pro) {
            res.json(pro);
        })

    }
    //res.end("进来getlist了")
});

// 修改嘉宾的邀请状态
router.get('/set', function (req, res, next) {
    console.log(req.query)
    // 先判断一下是否有这个数据，手机号唯一，用手机号判断
    product.getProByPhone(req.query.phone, function (err) {
        if (err) return next(err);
        // 进行数据修改
        product.updateProByPhone(req.query, function (err) {
            if (err)res.json({error: err});
            res.json({success: "true"});
        });
    })
});


// delete请求删除单条数据
router.get('/del', function (req, res) {
    console.log("进入删除逻辑")
    product.deletProByid(req.query, function (err, data) {
        if (err) return next(err);
        res.json({success: "true"});
    })
});

// 通过get请求去添加一个数据
router.get('/add', function (req, res, next) {
    console.log("进入add")
    console.log(req.query)
    product.addGuest(req.query,function(err,data){
        if (err)res.json({error: err});
        res.json({success: "true"});

    })
});

// 待改进，通过post请求去新增数据
//router.post('/add', function (req, res, next) {
//    console.log(req.body);
//    var pro = new product({
//        photo  : req.body.photo?req.body.photo:'',
//        price  : req.body.price?req.body.price:'',
//        describe : req.body.describe?req.body.describe:'',
//        name : req.body.name?req.body.name:''
//    })
//    product.savePro(pro,function(err,data){
//        if (err)res.json({error: err});
//        res.json({success: "true"});
//
//    })
//});
module.exports = router;
