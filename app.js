(function() {
    var app = angular.module("app", []);

    app.controller('TabController', function() {
        this.tab = 1;
    });

    app.controller('StoreController', function() {
        this.foo = 1;
    });
})();
