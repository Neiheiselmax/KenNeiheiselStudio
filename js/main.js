(function() {
    'use strict';

    angular
    .module('routing', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider,$locationProvider){

  //   	$locationProvider.html5Mode({
		//   enabled: true,
		//   requireBase: false
		// });

    	$stateProvider
	    .state('home', {
	      url: '/',
	      views: {
		      'content': {
		        templateUrl: '../partials/home.html',
            controller:"MainController",
            controllerAs:"vm",
		      }
		   }
	    })
	    .state('gallery', {
	      url: '/gallery',
	      views: {
		      'content': {
		        templateUrl: '../partials/gallery.html',
            controller:"GetImagesController",
            controllerAs:"vm",
          }
		   }
	    })
      .state('bio', {
	      url: '/bio',
	      views: {
		      'content': {
		        templateUrl: '../partials/bio.html',
            // controller:"MainController",
            // controllerAs:"vm",
          }
       }
      })
      .state('news', {
        url: '/news',
        views: {
          'content': {
            templateUrl: '../partials/news.html',
            // controller:"MainController",
            // controllerAs:"vm",
          }
       }
      })
      .state('contact', {
        url: '/contact',
        views: {
          'content': {
            templateUrl: '../partials/contact.html',
            // controller:"MainController",
            // controllerAs:"vm",
          }
       }
      })
      .state('addImage', {
        url: '/addImage',
        views: {
          'content': {
            templateUrl: '../partials/addImage.html',
            controller:"AddImageController",
            controllerAs:"vm",
          }
       }
      })
    });

})();
