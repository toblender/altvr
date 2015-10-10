'use strict';

/**
 * @ngdoc service
 * @name mk1App.spaceObj
 * @description
 * # spaceObj
 * Factory in the mk1App.
 */
angular.module('mk1App')
  .factory('SpaceObj', function () {
    // Service logic
    var space = {};
    var self = this;
    // Public API here
    return {
      get: function () {
        return this.space;
      },
      set:function(space){
        this.space = space;
      }
    };
  });
