'use strict';

class BookController {
  constructor($scope, $state, loadedBook, bundles) {
    $scope.loadedBook = loadedBook;
    $scope.bundles = bundles;
  }
}

BookController.inject = ['$scope', '$state', 'loadedBook', 'bundles'];

export default BookController;
