(function() {
    var app = angular.module("app", []);

    //TODO: figure out how to make the websocket a service
    app.controller('FleetMonitorController', ['$scope', function($scope) {
        var websocket = null;

        $scope.state = 0;

        $scope.fields = [];
        $scope.items = [];

        $scope.disconnect = function() {
            $scope.apply(function() { $scope.state = 0; });
            websocket = null;
        };

        $scope.connect_to = function(url) {
            $scope.state = 1;

            websocket = new WebSocket(url);

            websocket.onopen = function() {
                $scope.alppy(function() { $scope.state = 2; });
            };

            websocket.onclose = function() {
                $scope.disconnect();
            };

            websocket.onerror = function() {
                $scope.disconnect();
            };

            websocket.onmessage = function(evt) {
                var message = JSON.parse(evt.data);
                $scope.apply(function() {
                    $scope.state = 2;
                    if(message.type == "unit")
                    {
                        $scope.fields = message.fields;
                        $scope.items = message.items;
                    }
                });
            };
        };
    }]);
})();
