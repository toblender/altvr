'use strict';

/**
 * @ngdoc function
 * @name mk1App.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the mk1App
 */
angular.module('mk1App')
  .controller('EditCtrl', function ($routeParams,$location,SpaceObj,$scope) {
    this.formHTML = '/views/form.html';
    this.loading = true;
    var self = this;
    var spaceId = $routeParams.id;
    Data.Space.getById(spaceId)
      .then(function(data){
        self.loading = false;
        SpaceObj.set(data);
        $scope.$broadcast('LOAD_SPACE_DATA','load data')
      })
    this.deleteSpace = function(){
      Data.Space.deleteById(spaceId)
        .then(function(data){
          self.alerts.push({msg:'Delete successful. <a href="#/">Back to list</a>',type:'danger'})
          $scope.$apply();
        });
    }
    this.cancel = function(){
      $location.path('#/');
    }
    this.alerts = [];
    this.save = function(){
      Data.Space.updateById(spaceId,SpaceObj.get())
        .then(function(data){
          self.alerts.push({msg:'Save successful. <a href="#/">Back to list</a>',type:'success'})
          $scope.$apply();
        })
    }
    this.closeAlert = function(index){
      self.alerts.splice(index,1);
    }
  });
