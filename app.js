(function() {
    var app = angular.module("app", []);

    //TODO: figure out how to make the websocket a service
    app.controller('FleetMonitorController', ['$scope', function($scope) {
        var websocket = null;
        var state = 0;

        var fields = [];
        var items = [];

        $scope.is_disconnected = function() {
            return state == 0;
        }

        $scope.is_connecting = function() {
            return state == 1;
        }

        $scope.is_connected = function() {
            return state == 2;
        }

        $scope.fields = function() {
            return fields;
        }

        $scope.items = function() {
            return items;
        }

        $scope.has_data = function() {
            return !$scope.is_disconnected() && fields.length;
        }

        $scope.disconnect = function() {
            $scope.$apply(function() {
                state = 0;
                fields = [];
                items = [];
            });
            websocket = null;
        };

        $scope.connect_to = function(url) {
            state = 1;

            websocket = new WebSocket(url);

            websocket.onopen = function() {
                $scope.$apply(function() { state = 2; });
            };

            websocket.onclose = function() {
                $scope.disconnect();
            };

            websocket.onerror = function() {
                $scope.disconnect();
            };

            websocket.onmessage = function(evt) {
                var message = JSON.parse(evt.data);
                $scope.$apply(function() {
                    if(message.type == "unit")
                    {
                        fields = message.fields;
                        items = message.items;
                    }
                });
            };
        };
    }]);
})();
