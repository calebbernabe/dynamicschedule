var scheduleApp = angular.module('scheduleApp', ['firebase', 'ngAnimate', 'ui.router'])
scheduleApp.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider

        .state('schedule', {
          url: '/index',
          templateUrl: 'schedule.html',
          controller: 'mainController'
        })
       .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })

        .state('form.appointment', {
            url: '/appointment',
            templateUrl: 'form-appointment.html'
        })
        
        .state('form.confirmation', {
            url: '/confirmation',
            templateUrl: 'form-confirmation.html'
        });

    $urlRouterProvider.otherwise('/index');
})

//schedule

.controller('mainController', function($scope, $firebase){

 var ref = new Firebase("https://angularschedule.firebaseio.com/days");
 var fb = $firebase(ref);

 var syncObject = fb.$asObject();
 
 syncObject.$bindTo($scope, 'days');

 $scope.reset = function() {

   fb.$set({
     monday: {
        name: 'Monday',
        slots: {
          900: {
            time: '9:00am',
            booked: false,
            name: 'Default'
          },
          0110: {
            time: '11:00am',
            booked: false
          },
          100: {
            time: '1:00pm',
            booked: false
          },
          300: {
            time: '3:00pm',
           booked: false
         },
          500: {
            time: '5:00pm',
            booked: false
          },
          700: {
            time: '7:00pm',
            booked: false
          }
       }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          },
          100: {
            time: '1:00pm',
            booked: false
          },
          300: {
            time: '3:00pm',
            booked: false
          },
          500: {
            time: '5:00pm',
            booked: false
          },
          700: {
            time: '7:00pm',
            booked: false
          }
       }
      },
      wednesday: {
        name: 'Wednesday',
        slots: {
          900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          },
          100: {
            time: '1:00pm',
            booked: false
          },
          300: {
            time: '3:00pm',
            booked: false
          },
          500: {
            time: '5:00pm',
            booked: false
          },
          700: {
            time: '7:00pm',
            booked: false
          }        
       }
     }
   });

 };
});

// Form


scheduleApp.controller('formController', function($scope) {

    $scope.formData = { };

    $scope.processForm = function() {
        alert('Appointment Booked!');
    };
    
});