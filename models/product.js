/**
 * Created by cena on 2016/4/18.
 */
var connection = require('./db.js');
var uuid = require('node-uuid');

function Product(product) {
    this.state = product.state;
    this.phone = product.phone;
    this.name = product.name;

}

// 向数据库请求所有列表数据
Product.getAllList = function (callback) {
    console.log("已进入getProByid函数")
    var selectSql = 'SELECT * FROM list';
    //query执行sql语句的方法，第一参数字符串型的sql语句,变量
    connection.query(selectSql, [], function (err, res) {
        if (err) {
            console.log('getProByid err:' + err);
            return;
        }
        console.log('Get product success' + res);
        console.dir(res);
        callback(err, res);
    });
}
// 通过传入的状态获取列表数据
Product.getProByState = function (state, callback) {
    var selectSql = 'SELECT * FROM list WHERE state =?';
    //query执行sql语句的方法，第一参数字符串型的sql语句,变量
    connection.query(selectSql, [state], function (err, res) {
        if (err) {
            console.log('getProByid err:' + err);
            return;
        }
        console.log('Get product success' + res);
        console.dir(res);
        callback(err, res);
    });
}
// 通过phone获取列表数据
Product.getProByPhone = function (phone, callback) {
    var selectSql = 'SELECT * FROM list WHERE phone =?';
    //query执行sql语句的方法，第一参数字符串型的sql语句,变量
    connection.query(selectSql, [phone], function (err, res) {
        if (err) {
            console.log('getProByid err:' + err);
            return;
        }
        callback(err, res);
    });
}

// 修改列表数据的，state值
Product.updateProByPhone = function (data, callback) {
    var delSql = 'UPDATE list SET state =? WHERE phone=?';
    connection.query(delSql, [data.state, data.phone], function (err, res) {
        if (err) {
            console.log('getProByid err:' + err);
            return;
        }
        callback(err, res);
    });
}

//
Product.deletProByid = function (data, callback) {
    console.log(data)
    var delSql = 'DELETE FROM list WHERE phone=?';
    connection.query(delSql, [data.phone], function (err, res) {
        if (err) {
            console.log('getProByid err:' + err);
            return;
        }
        // console.log('Get product success'+res);
        //console.dir(res);
        callback(err, res);
    });
}

Product.addGuest = function (data, callback) {
    //var id=uuid.v1();
    var saveSql = 'INSERT INTO list (name,phone,state) VALUES (?,?,?)';
    connection.query(saveSql, [data.name, data.phone, data.state], function (err, res) {
        if (err) {
            console.log('save err:' + err);
            return;
        }
        callback(err, res);
    });

}

module.exports = Product;