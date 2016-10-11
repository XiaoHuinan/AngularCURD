/**
 * Created by cena on 2016/4/18.
 */
// 引入需要的模块
var express = require('express'),
    router = express.Router(),
    product = require('../models/product');
    
// 获取嘉宾列表
router.get('/getlist', function (req, res,next) {
    console.log("请求已进入getlist");

    console.log('数据类型为'+req.query.state);
    // 不同页面的请求列表的逻辑
    if(req.query.state === "全部"){
        product.getAllList(function (err, pro) {
            res.json(pro);
        });
    }else{
        console.log("非全部")
        console.log(req.query.state)
        product.getProByid(req.query.state, function (err, pro) {
            res.json(pro);
        })

    }
    //res.end("进来getlist了")
});
// 测试是否接收到了参数
//router.get('/pro/:phone', function (req, res) {
//    console.log(req.param('phone'))
//    //res.end("呵呵")
//});
//get请求+id 查询单个产品信息
router.get('/getlist/:state', function (req, res) {
    //console.log(req.param('state'))


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
