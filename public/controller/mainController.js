(function () {
    var app = angular.module('s9.ctrl',[]);
    app.controller('MainController', function ($scope, modelService) {
        // 我们用modelService来做数据访问
        var dataAccess = $scope.dataAccess = modelService;
        var newGuest = $scope.newGuest = {};

        $scope.list = [];
        $scope.state = '全部';

        dataAccess.getList($scope.state, function (msg) {
            if (msg.status == 'failed') {
                alert('数据获取失败');
            } else {
                $scope.list = msg.data;
            }
        });

        $scope.actions = {
            add: function () {
                // msg对象存储了这次操作的结果
                dataAccess.add(newGuest.name, newGuest.phone, function (msg) {
                    if (msg.status == 'failed') {
                        alert('操作失败: ' + msg.message);
                    } else {
                        // getList它的msg对象存储了操作的结果和列表数据
                        dataAccess.getList($scope.state, function (msg) {
                            if (msg.status == 'failed') {
                                alert('操作失败: ' + msg.message);
                            } else {
                                $scope.list = msg.data;
                            }
                        })
                    }
                })
            },
            del: function (guest) {
                dataAccess.del(guest, function (msg) {
                    if (msg.status == 'failed') {
                        alert('操作失败:' + msg.message)
                    } else {
                        // getList它的msg对象存储了操作的结果和列表数据
                        dataAccess.getList($scope.state, function (msg) {
                            if (msg.status == 'failed') {
                                alert('操作失败: ' + msg.message);
                            } else {
                                $scope.list = msg.data;
                            }
                        })
                    }
                })
            },
            filter: function (state) {
                $scope.state = state;
                dataAccess.getList($scope.state, function (msg) {
                    if (msg.status == 'failed') {
                        alert('操作失败: ' + msg.message);
                    } else {
                        $scope.list = msg.data;
                    }
                })
            },
            setState: function (guest, state) {
                dataAccess.setState(guest, state, function (msg) {
                    if (msg.status == 'failed') {
                        alert('操作失败: ' + msg.message);
                    } else {
                        dataAccess.getList($scope.state, function (msg) {
                            if (msg.status == 'failed') {
                                alert('操作失败: ' + msg.message);
                            } else {
                                $scope.list = msg.data;
                            }
                        })
                    }
                })
            }
        }

    });
})();