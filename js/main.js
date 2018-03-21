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
            controllerAs:"vm",
          }
		   }
	    })
      .state('bio', {
	      url: '/bio',
	      views: {
		      'content': {
		        templateUrl: '../partials/bio.html',
            controller:"MainController",
            // controllerAs:"vm",
          }
       }
      })
      .state('news', {
        url: '/news',
        views: {
          'content': {
            templateUrl: '../partials/news.html',
            controller:"MainController",
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
      .state('hieroglyphics', {
        url: '/hieroglyphics',
        views: {
          'content': {
            templateUrl: '../partials/hieroglyphics.html',
            // controllerAs:"vm",
          }
       }
      })
      .state('paintings', {
        url: '/paintings',
        views: {
          'content': {
            templateUrl: '../partials/paintings.html',
            controllerAs:"vm",
          }
       }
      })
      .state('sculpture', {
        url: '/sculpture',
        views: {
          'content': {
            templateUrl: '../partials/sculpture.html',
            controllerAs:"vm",
          }
       }
      })
      .state('paper', {
        url: '/paper',
        views: {
          'content': {
            templateUrl: '../partials/paper.html',
            controllerAs:"vm",
          }
       }
      })
      .state('wood', {
        url: '/wood',
        views: {
          'content': {
            templateUrl: '../partials/wood.html',
            controllerAs:"vm",
          }
       }
      })

    });

})();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
};
