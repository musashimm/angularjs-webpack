import angular from 'angular'
import 'angular-route'
import './app.module'

angular
  .module('app')
  .config(['$routeProvider',
    function config ($routeProvider) {
      $routeProvider
        .when('/phones', {
          template: '<phone-list></phone-list>'
        })
        .when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        })
        .otherwise('/phones')
    }
  ])
