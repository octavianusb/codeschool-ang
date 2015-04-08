/**
 * Created by octa on 08.04.2015.
 */
(function() {
    var app = angular.module('store-products', []);

    app.directive("productTitle", function(){
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    app.directive("productReviews", function(){
        return {
            restrict: 'E', // element directive
            templateUrl: 'product-reviews.html'
        };
    });

    app.directive("productSpec", function(){
        return {
            restrict: 'A', // atribute directive
            templateUrl: 'product-spec.html'
        };
    });

    app.directive("productTabs", function(){
        return {
            restrict: 'E',
            templateUrl: 'product-tabs.html',
            controller: function(){
                this.tab = 1;
                this.isSet = function(checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function(setTab) {
                    this.tab = setTab;
                };
            },
            controllerAs: 'tab'
        };
    });

    app.directive("productGallery", function(){
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function() {
                this.current = 0;

                this.setCurrent = function(index){
                    this.current = index || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });
})();