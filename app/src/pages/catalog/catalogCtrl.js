'use strict';

class CatalogController {
  constructor($scope, $state, AggregionAPI, loadedBooks) {
    $scope.loadedBooks = loadedBooks;
  }
}

CatalogController.$inject = ['$scope', '$state', 'AggregionAPI','loadedBooks' ];

export default CatalogController;
