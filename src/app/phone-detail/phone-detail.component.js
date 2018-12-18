import angular from 'angular'
import './phone-detail.module'
import template from './phone-detail.html'

angular
  .module('phoneDetail')
  .component('phoneDetail', {
    template: template,
    controller: ['$routeParams',
      function PhoneDetailController ($routeParams) {
        this.phoneId = $routeParams.phoneId
      }
    ]
  })
