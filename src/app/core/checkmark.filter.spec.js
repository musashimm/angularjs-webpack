/* eslint no-undef: "error" */
/* eslint-env jasmine, protractor */
/* global angular, inject */

import core from './core.module'

describe('checkmark', function () {
  beforeEach(angular.mock.module(core))

  it('should convert boolean values to unicode checkmark or cross',
    inject(function (checkmarkFilter) {
      expect(checkmarkFilter(true)).toBe('\u2713')
      expect(checkmarkFilter(false)).toBe('\u2718')
    })
  )
})
