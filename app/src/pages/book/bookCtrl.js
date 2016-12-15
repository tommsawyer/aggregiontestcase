'use strict';

class BookController {
  constructor($state, loadedBook, bundles) {
    this.loadedBook = loadedBook;
    this.bundles    = bundles;
  }
}

BookController.inject = ['$state', 'loadedBook', 'bundles'];

export default BookController;
