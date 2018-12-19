import angular from 'angular'
import './phone-detail.module'
import template from './phone-detail.html'

angular
  .module('phoneDetail')
  .component('phoneDetail', {
    template: template,
    controller: ['$http', '$routeParams',
      function PhoneDetailController ($http, $routeParams) {
        var self = this

        $http.get('data/' + $routeParams.phoneId + '.json').then(function (response) {
          self.phone = response.data
        })
      }
    ]
  })
