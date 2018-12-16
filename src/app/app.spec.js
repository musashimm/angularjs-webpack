import app from './app'

describe('app', () => {
  describe('PhoneListController', () => {
    beforeEach(() => {
      angular.mock.module(app)
    })

    it('should create a `phones` model with 3 phones', inject(function($controller) {
      var scope = {}
      var ctrl = $controller('PhoneListController', { $scope: scope })
      expect(scope.phones.length).toBe(3)
    }))

    it('should has name', inject(function($controller) {
      var scope = {}
      var ctrl = $controller('PhoneListController', { $scope: scope })
      expect(scope.name).toBe('world')
    }))
  })
})
