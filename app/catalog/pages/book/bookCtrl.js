'use strict';

class BookController {
  constructor($state, loadedBook, bundles, AggregionAPI) {
    this.loadedBook = loadedBook;
    this.bundles    = bundles;
    this.API        = AggregionAPI;
  }
}

BookController.inject = ['$state', 'loadedBook', 'bundles', 'AggregionAPI'];

export default BookController;
