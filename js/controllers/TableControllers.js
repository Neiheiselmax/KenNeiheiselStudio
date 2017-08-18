(function() {
    'use strict';

    angular
        .module('routing')
        .controller('MainController', function() {
          const vm = this;

            $('#bxslider').bxSlider({
              pager: false,
              mode: 'fade',
              auto: true,
              speed: 2000,
              });

          })


       })();
