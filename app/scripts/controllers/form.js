'use strict';

/**
 * @ngdoc function
 * @name mk1App.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the mk1App
 */
angular.module('mk1App')
  .controller('FormCtrl', function (SpaceObj,$scope,$location) {
    //Get all the users for multiple select
    Data.User.getAll()
      .then(function(data){
        $scope.users = data;
      });

    //Wait for stuff to finish loading
    $scope.$on('LOAD_SPACE_DATA',function(event,obj){
        $scope.space = SpaceObj.get();
        if($scope.space){
            Data.User.getById($scope.space.created_by)
              .then(function(data){
                $scope.space.user = data;
              })
        }else{
          //Redirect back to main view
          $location.path('#/');
        }
    });
    $scope.$emit('FORM_LOADED','ready to accept calls');
  });
