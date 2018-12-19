import angular from 'angular'
import './phone-list.module'
import template from './phone-list.html'
import Phone from '../core/phone/phone.service'

angular
  .module('phoneList')
  .component('phoneList', {
    template: template,
    controller: [Phone,
      function PhoneListController (Phone) {
        this.phones = Phone.query()
        this.orderProp = 'age'
        this.name = 'world'
      }
    ]
  })
