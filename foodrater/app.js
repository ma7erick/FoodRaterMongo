// angular.module('News', ['ui.router'])


// .controller('MainCtrl', [
// '$scope',
// function($scope){
//   $scope.test = 'Hello world!';
// }])

// .controller('MoreFoodCtrl', [
//   '$scope',
//   'postFactory',


// //  function($scope, postFactory){

// //   $scope.loadData = function(){

// //     var text = '{"burgers":[' + 
// //     '{"name": "Butter Burger", "restaurant": "Culver\'s", "image": "", "upvotes": 1000},' + 
// //     '{ "name": "Big Mac", "restaurant": "McDonald\'s", "image": "", "upvotes": 1000},' + 
// //     '{"name": "Baconator", "restaurant":"Wendy\'s", "image": "", "upvotes": 1000},' + 
// //     '{ "name": "4 X 4", "restaurant": "In And Out", "image": "", "upvotes": 2000} ]}';
// //     var obj = JSON.parse(text);
// //       $scope.posts.push({
// //           title: obj.burgers[1].name,
// //           image: obj.burgers[1].image,
// //           restaurant: obj.burgers[1].restaurant,
// //           upvotes: obj.burgers[1].upvotes,
// //           comments: []
// //         });

// //     // for (var i = 0 ; i<obj.length; i++) {
// //     //   console.log(obj.burgers[i].name);
    

// //     // }
// //   }
// // },

  

//   function($scope, postFactory){
//     $scope.posts = postFactory.posts;
//      $scope.addPost = function(){
       
//     if($scope.formContent === ''  || typeof $scope.formContent === 'undefined') { return; }
//     if($scope.imageContent === '' || typeof $scope.imageContent === 'undefined') { 
//       $scope.imageContent = 'http://www.clipartbest.com/cliparts/yTk/GEo/yTkGEoxTE.png';
     
//     }
//     $scope.posts.push({
//       title: $scope.formContent,
//       image: $scope.imageContent,
//       restaurant: $scope.restaurantContent,
//       upvotes: 0,
//       comments: []
//     });
//     $scope.title = '';
//     $scope.formContent='';
//     $scope.image='';
//     $scope.imageContent='';
//     $scope.restaurant='';
//     $scope.restaurantContent='';
//   };
//      $scope.incrementUpvotes = function(post) {
//       post.upvotes += 1;
//     };
    
//     $scope.decrementUpvotes = function(post) {
//       post.upvotes -= 1;
//     };
//   }
  

// ])

// .controller('PostCtrl', [
//   '$scope',
//   '$stateParams',
//   'postFactory', 
//   function($scope, $stateParams, postFactory){
//     $scope.post = postFactory.posts[$stateParams.id];
//     $scope.addComment = function(){
//       if($scope.body === '') { return; }
//       $scope.post.comments.push({
//         body: $scope.body,
//         upvotes: 0
//       });
//       $scope.body = '';
//     };
//   $scope.incrementUpvotes = function(comment){
//     comment.upvotes += 1; 
//   };
// }])

// .factory('postFactory', [function(){
//   var o = {
//     posts: []
//   };
//   return o;
// }])

// .config([
//   '$stateProvider',
//   '$urlRouterProvider',
//   function($stateProvider, $urlRouterProvider) {
//     $stateProvider
//       .state('home', {
//         url: '/home',
//         templateUrl: '/home.html',
//         controller: 'MainCtrl'
//       })
//       .state('food', {
//       url: '/food',
//       templateUrl: '/food.html',
//       controller: 'FoodCtrl'
//     })
//       .state('moreFood', {
//       url: '/moreFood',
//       templateUrl: '/moreFood.html',
//       controller: 'MoreFoodCtrl'
//     });
//     $urlRouterProvider.otherwise('home');
// }])

// .config([
//   '$stateProvider',
//   '$urlRouterProvider',
//   function($stateProvider, $urlRouterProvider) {
//     $stateProvider
//       .state('posts', {
//         url: '/posts/{id}',
//         templateUrl: '/posts.html',
//         controller: 'PostCtrl'
//       });
//     $urlRouterProvider.otherwise('home');
// }]);




angular.module('News', ['ui.router', 'ngMaterial'])


.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'

    })
    .state('food', {
      url: '/food',
      templateUrl: '/food.html',
      controller: 'FoodCtrl'
     
    })
    .state('moreFood', {
      url: '/moreFood',
      templateUrl: '/moreFood.html',
      controller: 'MoreFoodCtrl'
      
    });

  $urlRouterProvider.otherwise('home');
}]) 

.factory('burgerFactory', [function(){
  var o = {
    burger: [
    {
        title: 'Big Mac',
        restaurant: 'McDonald\'s',
        image: 'bigmac.jpg',
        upvotes: 8056,
        comments: []
    },

    {
        title: 'Butter Burger',
        restaurant: 'Culver\'s',
        image: 'butterburger.jpg',
        upvotes: 2356,
        comments: []
    },

    {
        title: '4 X 4',
        restaurant: 'In-N-Out',
        image: '4x4.jpg',
        upvotes: 8052,
        comments: []
    },

    {
        title: 'Baconator',
        restaurant: 'Wendy\'s',
        image: 'baconator.jpg',
        upvotes: 1567,
        comments: []
    }
    ]
  };
  return o;
}])

.factory('burritoFactory', [function(){
  var o = {
    burrito: [
{
        title: 'Steak + Eggs Breakfast Burrito',
        restaurant: 'Rancheritos',
        image: 'ranch.jpg',
        upvotes: 15000,
        comments: []
    },

    {
        title: 'Smokehouse Burrito',
        restaurant: 'Sweeto Burrito',
        image: 'sweeto.jpg',
        upvotes: 4386,
        comments: []
    },

    {
        title: 'Chicken Burrito',
        restaurant: 'Cafe Rio',
        image: 'caferio.jpg',
        upvotes: 2573,
        comments: []
    },

    {
        title: 'PorkBurrito',
        restaurant: 'Costa Vida',
        image: 'costa.jpg',
        upvotes: 2067,
        comments: []
    }
    ]
  };
  return o;
}])

.controller('MainCtrl', [
'$scope',
// function(){
//  $rootscope.background = "otherBackground.jpg";
// },
function($scope){
  $scope.test = 'Hello world!';
}

])

.controller('FoodCtrl', [
'$scope',
'$stateParams',
'burgerFactory',

function($scope, $stateParams, burgerFactory){
  $scope.burger = burgerFactory.burger;
  console.log("i'm here")
  console.log("The food scope: " + $scope.burger)
  console.log(burgerFactory.burger)


  $scope.addBurger = function(){
    if($scope.formContent === ''  || typeof $scope.formContent === 'undefined') { return; }
    if($scope.imageContent === '' || typeof $scope.imageContent === 'undefined') { 
      $scope.imageContent = 'http://www.clipartbest.com/cliparts/yTk/GEo/yTkGEoxTE.png';
     
    }
    console.log(burgerFactory.burger.length)

    $scope.burger.push({
      title: $scope.formContent,
      image: $scope.imageContent,
      restaurant: $scope.restaurantContent,
      upvotes: 0,
      comments: []
    });
    $scope.title = '';
    $scope.formContent='';
    $scope.image='';
    $scope.imageContent='';
    $scope.restaurant='';
    $scope.restaurantContent='';
  };
     $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
    
    $scope.decrementUpvotes = function(post) {
      post.upvotes -= 1;
    };
  }
  

])
.controller('MoreFoodCtrl', [
'$scope',
'$stateParams',
'burritoFactory',
// function(){
//  $rootscope.background = "";
// },
function($scope, $stateParams, burritoFactory){
  $scope.burrito = burritoFactory.burrito;


  $scope.addBurrito = function(){
    if($scope.formContent === ''  || typeof $scope.formContent === 'undefined') { return; }
    if($scope.imageContent === '' || typeof $scope.imageContent === 'undefined') { 
      $scope.imageContent = 'http://www.clipartbest.com/cliparts/yTk/GEo/yTkGEoxTE.png';
     
    }
    

    $scope.burrito.push({
      title: $scope.formContent,
      image: $scope.imageContent,
      restaurant: $scope.restaurantContent,
      upvotes: 0,
      comments: []
    });
    $scope.title = '';
    $scope.formContent='';
    $scope.image='';
    $scope.imageContent='';
    $scope.restaurant='';
    $scope.restaurantContent='';
  };
     $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
    
    $scope.decrementUpvotes = function(post) {
      post.upvotes -= 1;
    };
  
}]);
