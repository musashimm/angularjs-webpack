import angular from 'angular'
import 'angular-route'

import './phone-list/phone-list.module'
import './phone-detail/phone-detail.module'

angular.module('app', [
  'ngRoute',
  'phoneList',
  'phoneDetail',
  'core'
])
