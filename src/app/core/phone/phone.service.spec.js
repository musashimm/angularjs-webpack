/* eslint no-undef: "error" */
/* eslint-env jasmine, protractor */
/* global angular, inject */

import corePhone from './phone.module'
// import './phone.service'

// describe('Phone', function () {
//   var $httpBackend
//   var Phone
//   var phonesData = [
//     { name: 'Phone X' },
//     { name: 'Phone Y' },
//     { name: 'Phone Z' }
//   ]

//   // Load the module that contains the `Phone` service before each test
//   beforeEach(angular.mock.module(corePhone))

//   // Add a custom equality tester before each test
//   beforeEach(function () {
//     jasmine.addCustomEqualityTester(angular.equals)
//   })

//   // Instantiate the service and "train" `$httpBackend` before each test
//   beforeEach(inject(function (_$httpBackend_, _Phone_) {
//     $httpBackend = _$httpBackend_
//     $httpBackend.expectGET('data/phones.json').respond(phonesData)

//     Phone = _Phone_
//   }))

//   // Verify that there are no outstanding expectations or requests after each test
//   afterEach(function () {
//     $httpBackend.verifyNoOutstandingExpectation()
//     $httpBackend.verifyNoOutstandingRequest()
//   })

//   it('should fetch the phones data from `/data/phones.json`', function () {
//     var phones = Phone.query()

//     expect(phones).toEqual([])

//     $httpBackend.flush()
//     expect(phones).toEqual(phonesData)
//   })
// })
