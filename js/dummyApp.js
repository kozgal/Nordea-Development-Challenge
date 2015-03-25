var dummyApp = angular.module("dummyApp", [ "ngRoute", "ngTouch"]); //deklarer modul

  dummyApp.config(function($routeProvider, $locationProvider) //konfigurer routing med ngRoute
  {
    $routeProvider

      .when('/', { //når vi er i root
        templateUrl : 'homescreen.html', //inject homescreen.html
        controller  : 'appController' //og brug denne controller
      })

      .when('/appstore/', { //når vi er i appstore
        templateUrl : 'appstore.html', //inject appstore.html
        controller  : 'appController' //og anvend appController
      });

        //$locationProvider.html5Mode(true);
  });


  dummyApp.controller('appController', ['$scope', 'homeApps', function($scope, homeApps){
    $scope.homeApps = homeApps; //definer scope.homeApps fra homeApps nederst på siden

    $scope.allApps = [ //definer allApps array. Dette er alle tilgængelige apps på appStore
      {id:"1", name:"Dummy", link:"#/"},
      {id:"2", name:"Dummy", link:"#/"},
      {id:"3", name:"Dummy", link:"#/"},
      {id:"4", name:"Dummy", link:"#/"},
      {id:"5", name:"Dummy", link:"#/"},
      {id:"6", name:"AppStore", link:"#/"},
      {id:"7", name:"Dummy", link:"#/"},
      {id:"8", name:"Dummy", link:"#/"},
      {id:"9", name:"Dummy", link:"#/"},
      {id:"10", name:"Dummy", link:"#/"},
      {id:"11", name:"Dummy", link:"#/"},
      {id:"12", name:"Dummy", link:"#/"},
      {id:"13", name:"Dummy", link:"#/"},
      {id:"14", name:"Dummy", link:"#/"},
      {id:"15", name:"Dummy", link:"#/"},
      {id:"16", name:"Dummy", link:"#/"},
      {id:"17", name:"Dummy", link:"#/"},
      {id:"18", name:"Dummy", link:"#/"},
      {id:"19", name:"Dummy", link:"#/"},
      {id:"20", name:"Dummy", link:"#/"},
      {id:"21", name:"Dummy", link:"#/"},
      {id:"22", name:"Dummy", link:"#/"},
      {id:"23", name:"Dummy", link:"#/"},
      {id:"24", name:"Dummy", link:"#/"},
      {id:"25", name:"Dummy", link:"#/"},
      {id:"26", name:"Dummy", link:"#/"},
      {id:"27", name:"Dummy", link:"#/"},
      {id:"28", name:"Dummy", link:"#/"}];
 
    $scope.addApp = function(id) {
      homeApps.push({id:id, name:"New app", link:"#/"}); //tag id parameteret og indsæt den nye app i homeApps array.

      localStorage.setItem('homeApps', JSON.stringify($scope.homeApps)); //derefter opdater det nye homeApps array til localstorage
    };

    $scope.showDelete = function(){
    $scope.showdelete = !$scope.showdelete; //kontrollerer synlighed for delete div på ikonerne
  }

    $scope.deleteApp = function(app) {
      var index = $scope.homeApps.indexOf(app); //find index for den app der skal slettes
      $scope.homeApps.splice(index, 1); //splice dette index fra homeApps

      localStorage.setItem('homeApps', JSON.stringify($scope.homeApps)); //opdater arrayet i localstorage
    };
  }]);
  
  (function (dummyApp) {
    var homeApps = (localStorage.getItem('homeApps')) !== null ? JSON.parse(localStorage.getItem('homeApps')) :  [ 
      {id:"1", name:"Dummy", link:"#/"},
      {id:"2", name:"Dummy", link:"#/"},
      {id:"3", name:"Dummy", link:"#/"},
      {id:"4", name:"Dummy", link:"#/"},
      {id:"5", name:"Dummy", link:"#/"},
      {id:"6", name:"AppStore", link:"#appstore"},
      {id:"7", name:"Dummy", link:"#/"},
      {id:"8", name:"Dummy", link:"#/"},
      {id:"9", name:"Dummy", link:"#/"},
      {id:"10", name:"Dummy", link:"#/"}]; //hvis der eksisterer et arrray i localstorage, load det - ellers indsæt standard array

      localStorage.setItem('homeApps', JSON.stringify(homeApps)); //gem homeApps i localstorage
      
      dummyApp.factory('homeApps', function () {
        return homeApps; //send homeApps
      });
  })(dummyApp);
  
  