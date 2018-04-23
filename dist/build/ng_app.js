define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //====
    var ng_app = angular.module('fmid', [
        // https://material.angularjs.org/latest/
        'ngMaterial',
        // https://klarsys.github.io/angular-material-icons/
        'ngMdIcons',
        // 'ngResource',
        // 'ngMessages',
        'chart.js',
    ]);
    exports.ng_app = ng_app;
    ng_app.config(['$httpProvider', function ($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.headers.common['X-Requested-With'];
        }
    ]);
});
