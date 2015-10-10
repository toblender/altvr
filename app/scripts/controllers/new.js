'use strict';

/**
 * @ngdoc function
 * @name mk1App.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the mk1App
 */
angular.module('mk1App')
  .controller('NewCtrl', function ($scope,$location,SpaceObj) {
    this.alerts = [];
    var self = this;
    this.formHTML = '/views/form.html';
    this.space ={created_by:1};
    SpaceObj.set(this.space);
    $scope.$on('FORM_LOADED', function(event,data){
        $scope.$broadcast('LOAD_SPACE_DATA');
    })
    this.cancel = function(){
      $location.path('#/')
    }
    this.save = function(){
      Data.Space.create(SpaceObj.get())
        .then(function(data){
          self.alerts.push({msg:'Save successful. <a href="#/">Back to list</a>',type:'success'})
          $scope.$apply();
        })
    }
    this.closeAlert = function(index){
      self.alerts.splice(index,1);
    }
  });
