'use strict';

describe('Controller: DiretivasCtrl', function () {

  // load the controller's module
  beforeEach(module('diretivasApp'));

  var DiretivasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiretivasCtrl = $controller('DiretivasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DiretivasCtrl.awesomeThings.length).toBe(3);
  });
});
