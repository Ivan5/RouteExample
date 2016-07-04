(function(){
 var app = angular.module('navegacion',['ngRoute']);

 app.config(['$routeProvider', function($routeProvider){
   $routeProvider.when('/', {
     templateUrl: 'plantillas/inicio.html',
     controller: 'inicio'
   }).when('/galeria',{
     templateUrl: 'plantillas/galeria.html',
     controller: 'inicio'
   }).when('/404',{
     templateUrl: 'plantillas/404.html',
     controller: 'inicio'
   }).otherwise({
     redirecTo: '/404'
   });
 }]);

 app.controller('inicio', function($scope){
   $scope.saludo = "Hola";
 });

 app.controller('navegacionControl',function($scope, $location){
   $scope.esActivo = function(rutaActual){
     return rutaActual === $location.path();
   };
 });
})();
