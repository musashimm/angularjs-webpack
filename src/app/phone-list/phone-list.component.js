import angular from 'angular'
import './phone-list.module'
import template from './phone-list.html'

angular
  .module('phoneList')
  .component('phoneList', {
    template: template,
    controller: function PhoneListController () {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ]
      this.name = 'world'
    }
  })
