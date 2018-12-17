import angular from 'angular'
import './phone-list.module'
import template from './phone-list.html'

angular
  .module('phoneList')
  .component('phoneList', {
    template: template,
    controller: ['$http',
      function PhoneListController ($http) {
        var self = this

        this.phones = []
        this.orderProp = 'age'
        this.name = 'world'

        $http.get('data/phones.json').then(function (response) {
          self.phones = response.data
        })
      }
    ]
  })
