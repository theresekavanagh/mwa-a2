/*****************************************
Date: 23/10/2017
Author: Therese Kavanagh
WebElevate 5.1 - Coding Stream
MWA Assessment 2 - Angular JS (To Do App)
*****************************************/

// create and register the controller

// 1. create a model using the angular objects module() method
// Note to self:  the [] denoting an empty array, if you want your module to include other modules you can list them here [module1, module2] etc
var myToDoApp = angular.module('myToDoListModule', []);


// 2. create and register our controller with this module
myToDoApp.controller('myToDoListController', function($scope) {


    //set up a variable to contain our data
    var toDoList = [];

    // add it to the scope
    $scope.toDoList = toDoList;

    // Add some logic to the controller to take user input and add as a new item to the array
    // Note to self: we do not need to add the parameters to the function as they are already in the scope
    $scope.addtoList = function () {

        // push the user input into the main toDoList array
        $scope.toDoList.push(
            {
                name: $scope.newToDoItem.name,
                description: $scope.newToDoItem.description, done:false
            }
        );

        /* clear the values in the input boxes once submitted */
        $scope.newToDoItem.name = '';
        $scope.newToDoItem.description = '';
    };


    // function to delete the selected item from the toDoList array
    $scope.deleteFromList = function ($index) {

        var itemToDelete = $scope.toDoList.$index;

        $scope.toDoList.splice($index, 1);
    };

});
