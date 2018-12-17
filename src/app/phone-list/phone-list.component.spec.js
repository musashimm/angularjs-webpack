/* eslint no-undef: "error" */
/* eslint-env jasmine, protractor */
/* global angular, inject */

import phoneList from './phone-list.module'

describe('phoneList', () => {
  beforeEach(angular.mock.module(phoneList))

  describe('phoneListController', () => {
    var $httpBackend, ctrl

    beforeEach(inject(function ($componentController, _$httpBackend_) {
      ctrl = $componentController('phoneList')
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/phones.json')
        .respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }])
    }))

    it('should create a `phones` model with 2 phones', function () {
      expect(ctrl.phones).toEqual([])

      $httpBackend.flush()
      expect(ctrl.phones.length).toBe(2)
    })

    it('should has name', function () {
      expect(ctrl.name).toBe('world')
    })

    it('should set a default value for the `orderProp` model', function () {
      expect(ctrl.orderProp).toBe('age')
    })
  })
})
