import phoneList from './phone-list.module'

describe('phoneList', () => {
  describe('phoneList', () => {
    beforeEach(() => {
      angular.mock.module(phoneList)
    })

    it('should create a `phones` model with 3 phones', inject(function($componentController) {
      var ctrl = $componentController('phoneList')
      expect(ctrl.phones.length).toBe(3)
    }))

    it('should has name', inject(function($componentController) {
      var ctrl = $componentController('phoneList')
      expect(ctrl.name).toBe('world')
    }))
  })
})
