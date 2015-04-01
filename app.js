var scheduleApp = angular.module('scheduleApp', ['firebase', 'ngAnimate', 'ui.router'])

scheduleApp.service('Data', function($firebase){ 
  return function(){ 
    this.selectedSlot = null;
  }
})

scheduleApp.config(function($stateProvider, $urlRouterProvider ) {
    
    $stateProvider

        .state('schedule', {
          url: '/',
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
            templateUrl: 'form-profile.html',
        })

        .state('form.appointment', {
            url: '/appointment',
            templateUrl: 'form-appointment.html'
        })
        
        .state('form.confirmation', {
            url: '/confirmation',
            templateUrl: 'form-confirmation.html'
        });

    $urlRouterProvider.otherwise('/');
})


.controller('mainController', function($scope, $firebase, $state, Data){

  var ref = new Firebase("https://angularschedule.firebaseio.com/days");
  var fb = $firebase(ref);

  var syncObject = fb.$asObject();
  
  syncObject.$bindTo($scope, 'days');

  $scope.selectSlot = function(slot) {
    Data.selectedSlot = slot;
    $state.go('form.profile');
  }

  $scope.reset = function() {
    refs.remove();
    fb.$set({
      monday: {
        name: 'Monday',
        slots: {
          900: {
            time: '9:00am',
          },
          0110: {
            time: '11:00am',
          },
          100: {
            time: '1:00pm',
          },
          300: {
            time: '3:00pm',
          },
          500: {
            time: '5:00pm',
          },
          700: {
            time: '7:00pm',
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          900: {
            time: '9:00am',
  
          },
          0110: {
            time: '11:00am',
  
          },
          100: {
            time: '1:00pm',
  
          },
          300: {
            time: '3:00pm',
  
          },
          500: {
            time: '5:00pm',
  
          },
          700: {
            time: '7:00pm',
  
          }
        }
      },
      wednesday: {
        name: 'Wednesday',
        slots: {
          900: {
            time: '9:00am',
  
          },
          0110: {
            time: '11:00am',
  
          },
          100: {
            time: '1:00pm',
  
          },
          300: {
            time: '3:00pm',
  
          },
          500: {
            time: '5:00pm',
  
          },
          700: {
            time: '7:00pm',
  
          }       
        }
      }
    });
  };
})

.controller('formController', function($scope, $firebase, $state, Data){

  var refs = new Firebase("https://angularschedule.firebaseio.com/booked");

 $scope.selectedSlot = Data.selectedSlot;
  $scope.addData = function(selectedSlot){
    var slotrefs = refs.push({
      booked: {
        time: $scope.selectedSlot.time,
        booked: $scope.selectedSlot.booked,
        clientname: $scope.selectedSlot.name,
        email: $scope.selectedSlot.email,
        type: $scope.selectedSlot.type
      }
    })
  }

  $scope.processForm = function() {
      alert('Appointment Booked!');
  };
})
  