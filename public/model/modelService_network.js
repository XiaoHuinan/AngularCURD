(function () {
    // 现在我们的“硬盘”是独立的硬盘
    var app = angular.module('s9.model_network', []);
    // modelService是我们全程序的数据中心：现在需要做网络访问
    // 网络访问需要：$http
    app.service('modelService', function ($http) {
        // 下面的四个函数是我们对数据的一些操作

        // 用于往数据源里添加新的一条数据
        this.add = function (name, phone, callback) {
            // 调用服务器给的接口，数据是在服务器上的。
            // 我们现在只是通知服务器去做什么操作，
            // 服务器完成操作之后，会告诉我们操作是否成功
            $http
                .get('http://127.0.0.1:3000/nl/add',
                    {params: {name: name, phone: phone}})
                .then(
                    // 网络访问成功后执行的函数
                    function (res) {
                        callback({status: res.data.status, message: res.data.message})
                    },
                    // 网络访问失败后执行的函数
                    function (res) {
                        callback({status: 'failed', message: '网络访问失败'})
                    });
        };
        // 从数据源中删除项目
        this.del = function (guest, callback) {
            $http
                .get('http://127.0.0.1:3000/nl/del',
                    {params: {name: guest.name, phone: guest.phone}})
                .then(
                    // 网络访问成功后执行的函数
                    function (res) {
                        callback({status: res.data.status, message: res.data.message})
                    },
                    // 网络访问失败后执行的函数
                    function (res) {
                        callback({status: 'failed', message: '网络访问失败'})
                    });
        };
        // 根据条件从数据源中获取一个列表
        this.getList = function (state, callback) {
            $http
                .get('http://127.0.0.1:3000/nl/list',
                    {params: {state:state}})
                .then(
                    // 网络访问成功后执行的函数
                    function (res) {
                        callback({status: 'success', data:res.data})
                    },
                    // 网络访问失败后执行的函数
                    function (res) {
                        callback({status: 'failed', message: '网络访问失败'})
                    });
        };
        // 修改用户状态
        this.setState = function (guest, state, callback) {
            $http
                .get('http://127.0.0.1:3000/nl/set',
                    {params: {name: guest.name, phone: guest.phone,state:state}})
                .then(
                    // 网络访问成功后执行的函数
                    function (res) {
                        callback({status: res.data.status, message: res.data.message})
                    },
                    // 网络访问失败后执行的函数
                    function (res) {
                        callback({status: 'failed', message: '网络访问失败'})
                    });
        }
    });
})();
