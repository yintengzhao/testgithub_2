libUrl = "../libs/"
require.config({
    paths: {
      "jquery"        : libUrl+"jquery/dist/jquery",
      "angular"       : libUrl+"angular/angular",
      "ngMaterial"    : libUrl+"angular-material/angular-material",
      "ng-animate"    : libUrl+"angular-animate/angular-animate",
      "ngAria"        : libUrl+'angular-aria/angular-aria',
      "ngMdIcons"     : libUrl+'angular-material-icons/angular-material-icons',
      // "nixie-clock"   : libUrl+'nixie-clock/nixie',
      "chart"         : libUrl+'chart.js/dist/Chart',
      "angular-chart" : libUrl+'angular-chart.js/dist/angular-chart',
      // "angular-smart-table":libUrl+'angular-smart-table.js/dist/smart-table',
      "simpleWeather" : libUrl+'monkeecreate-jquery.simpleWeather-0d95e82/jquery.simpleWeather',
      "simpleWeathermin" : libUrl+'monkeecreate-jquery.simpleWeather-0d95e82/jquery.simpleWeather.min',


      "angular-weather-widget":libUrl+'angular-weather-widget',
    },
    // https://www.codeproject.com/articles/1123309/configure-angular-material-with-require-js
    shim: {
        ng_app: {
            exports: "ng_app",
            deps: [
                "jquery", "angular", "ngMaterial", 'ngMdIcons'
            ]
        },
        main_ctrl: {
            exports: "MainCtrl",
            deps: [
                "ng_app", "angular-chart"
            ]
        },
        require_sim_ctrl: {
            exports: "RequireSimCtrl",
            deps: [
                "ng_app", "angular-chart"
            ]
        },
        require_sim_ctrl: {
            exports: "WatchGoodsCtrl",
            deps: [
                "ng_app", "angular-chart"
            ]
        },
        trans_sim_ctrl: {
            exports: "TransSimCtrl",
            deps: [
                "ng_app", "angular-chart"
            ]
        },
        angular: {
            exports: "angular"
        },
        jquery: {
            exports: "$"
        },
        // 'nixie-clock': {
        //     deps: ['jquery']
        // },
        'ng-animate': {
            deps: ['angular']
        },
        ngAria: {
            deps: ['angular']
        },
        ngMaterial: {
            deps: ['angular', 'ng-animate', 'ngAria']
        },
        ngMdIcons: {
            deps: ['angular', 'ngMaterial']
        },
        "angular-chart": {
            deps: ["chart"]
        }
    }
});


require([
  'main_ctrl',
  'require_sim_ctrl',
  'watch_goods_ctrl',
  'trans_sim_ctrl',
  'demo',
])
