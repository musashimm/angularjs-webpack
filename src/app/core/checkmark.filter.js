import angular from 'angular'
import './core.module'

angular
  .module('core')
  .filter('checkmark', function () {
    return function (input) {
      return input ? '\u2713' : '\u2718'
    }
  })
