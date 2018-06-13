var app = angular.module('todoApp', []);

function DummyService($log) {
    this.logger = $log;
    this.logger.log("[logit] Created service");
}

DummyService.prototype.logIt=function(message){
    this.logger.log("[logit] " + message );
}

app.factory('$dummyService',['$log',
    function($log){
        return new DummyService($log);
    }
]);

app.controller('TodoListController',TodoListController );

function TodoListController($scope,$timeout,$interval,$http,$dummyService) {
    $dummyService.logIt('Called TodoListController');
    this.valuesX=[];    
    this.listDisabled=true;
    
    this.scope = $scope;
    this.dummySvc=$dummyService;
    this.scope.selectedOption='';
    this.scope.testx = this.testx;
    
    $timeout(this.fillValues.bind(this),5000);        
    $interval(function () { 
        $dummyService.logIt('$interval kkkk llll ' + new Date() );        
    },10000);    
    $http.get('/testSpringMVCThymeleaf-0.1.0/js/todo.js')
    .then(function(response) {
        $dummyService.logIt(response.data );
    });
    this.dummySvc.logIt('msgx');
}

TodoListController.prototype.testx=function(){
    return "ASDF";
};

TodoListController.prototype.fillValues=function(){
    this.dummySvc.logIt('called fill values');
    this.valuesX=['aa','bb','cc'];    
    this.listDisabled=false;
    this.scope.selectedOption='bb'; //select default value
    // when calling with $timeout $apply is not needed
    //this.scope.$apply();
};

TodoListController.prototype.change=function(){
    this.dummySvc.logIt('change');
    this.dummySvc.logIt( JSON.stringify(this.valuesX) );
    this.dummySvc.logIt( this.scope.selectedOption );
}