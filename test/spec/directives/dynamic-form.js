'use strict';

describe('Directive: dynamicForm', function () {

  // load the directive's module
  beforeEach(module('testApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dynamic-form></dynamic-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dynamicForm directive');
  }));
});
