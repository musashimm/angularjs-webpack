import angular from 'angular'
import './phone-detail.module'
import template from './phone-detail.html'
import Phone from '../core/phone/phone.service'

angular
  .module('phoneDetail')
  .component('phoneDetail', {
    template: template,
    controller: ['$routeParams', Phone,
      function PhoneDetailController ($routeParams, Phone) {
        var self = this

        self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
          self.setImage(phone.images[0])
        })

        self.setImage = function (imageUrl) {
          self.mainImageUrl = imageUrl
        }

        self.onDblclick = function (imageUrl) {
          alert('You double-clicked image: ' + imageUrl)
        }
      }
    ]
  })
