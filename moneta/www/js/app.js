// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ui.router'])
app.config(function ($stateProvider,$urlRouterProvider) { 
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'views/home.html'
    })
        .state('signup',{
            url: '/signup',
            templateUrl: 'views/signup.html',
            controller:'Registro'
    })
        .state('menu',{
            url: '/menu',
            templateUrl: 'views/menu.html'
    })
    .state('mapa',{
            url: '/menu',
            templateUrl: 'views/map.html'
    })
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

/*Controlador para hacer la funcionalidad a registro*/
.controller('Registro',function($scope,$http,$location){ 
    $scope.captura = function(){
        $http.get('http://192.168.20.246/moneta/ajax/registra.php?nombre='+this.nombre+'&apellido='+this.apellido+'&pasaporte='+this.pasaporte+'&nacionalidad='+this.nacionalidad+'&numeroTarjeta='+this.numeroTarjeta+'&caducidad='+this.caducidad+'&cvv='+this.cvv+'&pass='+this.pass+'&correo='+this.correo).then(function(resp) {
            $location.path('/');
            $scope.conditions = resp.data.conditions;
      }, function(err) {
        console.error('ERR', err);
        // err.status will contain the status code
      })
    }
});