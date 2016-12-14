'use strict';

class CatalogController {
  constructor($scope, $state, AggregionAPI, loadedBooks) {
    $scope.loadedBooks = loadedBooks;
    window.b = loadedBooks;
  }
}

CatalogController.$inject = ['$scope', '$state', 'AggregionAPI','loadedBooks' ];

export default CatalogController;
