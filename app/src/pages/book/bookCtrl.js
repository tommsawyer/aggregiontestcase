'use strict';

class BookController {
  constructor($scope, $state, loadedBook) {
    console.log(loadedBook);
  }
}

BookController.inject = ['$scope', '$state', 'loadedBook']

export default BookController;
