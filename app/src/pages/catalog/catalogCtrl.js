'use strict';

class CatalogController {
  constructor($state, loadedBooks) {
    this.loadedBooks = loadedBooks;
  }
}

CatalogController.$inject = ['$state', 'loadedBooks' ];

export default CatalogController;
