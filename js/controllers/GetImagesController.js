(function() {
    'use strict';

    angular
        .module('routing')
        .controller('GetImagesController', function(API) {
          const vm = this;

          let image = API.getImages();
          image.then(function successCallback(response){
          console.log(response)
          vm.image = response.data
          })

          })
         })();
