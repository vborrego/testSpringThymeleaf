var app = angular.module('todoApp');

app.component('headerDesc', {
    template: '<h1>Header with {{$ctrl.description}}!</h1>',
    controller: function HeaderController($dummyService) {
      this.description = 'desc';
      $dummyService.logIt('in header');
      // headerDesc translates to <header-desc>
    }
});