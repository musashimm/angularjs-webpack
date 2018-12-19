import angular from 'angular'
import './phone.module'

angular
  .module('core.phone')
  .factory('Phone', ['$resource',
    function ($resource) {
      return $resource('data/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: { phoneId: 'phones' },
          isArray: true
        }
      })
    }
  ])

export default 'Phone'
