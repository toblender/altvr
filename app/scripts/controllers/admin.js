'use strict';

/**
 * @ngdoc function
 * @name mk1App.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the mk1App
 */
angular.module('mk1App')
  .controller('AdminCtrl', function ($q, $location) {
    var self = this;
    this.users = {};
    var getUsers = function(spaces){
      //TODO refactor the data to include the username
      for(var i=0,j=spaces.length;i<j;i++){
        Data.User.getById(spaces[i].created_by)
          //TODO shim .bind()
          //There's a few ways to do this, I'm choosing to get all the data
          //Upfront before displaying
          .then(function(user){
                self.users[user.id] = user;
            })
          }
    }

    var getAllSpaces = function(){
      var promise_spaces = Data.Space.getAll()
        .then(function(spaces){
          getUsers(spaces)
          self.spaces = spaces;
        })

    }
    var promise = getAllSpaces();

    this.createNew = function(){
      $location.path('/new')
    }
  });
