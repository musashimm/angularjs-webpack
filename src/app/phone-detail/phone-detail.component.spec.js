/* eslint no-undef: "error" */
/* eslint-env jasmine, protractor */
/* global angular, inject */

import '../app.module'
import '../app.config'
import phoneDetail from './phone-detail.module'

describe('phoneDetail', function () {
  beforeEach(angular.mock.module(phoneDetail))

  describe('PhoneDetailController', function () {
    var $httpBackend, ctrl

    var xyzPhoneData = {
      name: 'phone xyz',
      images: ['image/url1.png', 'image/url2.png']
    }

    beforeEach(inject(function ($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_
      $httpBackend.expectGET('data/xyz.json').respond(xyzPhoneData)

      $routeParams.phoneId = 'xyz'

      ctrl = $componentController('phoneDetail')
    }))

    it('should fetch the phone details', function () {
      jasmine.addCustomEqualityTester(angular.equals)

      expect(ctrl.phone).toEqual({})

      $httpBackend.flush()
      expect(ctrl.phone).toEqual(xyzPhoneData)
    })
  })
})
