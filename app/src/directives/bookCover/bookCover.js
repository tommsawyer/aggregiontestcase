'use strict';

class BookCover {
  constructor(AggregionAPI) {
    this.api = AggregionAPI;
    this.scope = {};

    this.restrict = 'E';
  }

  link(scope, element, attrs) {
    this.api.getBookCover(attrs.id)
      .then(function(image) {
        image.class = attrs.class;
        element.append(image);
      })
      .catch(function(image) {
        image.class = attrs.class;
        element.append(image);
      });
  }
  
  static getInstance(AggregionAPI) {
    return new BookCover(AggregionAPI);
  }
}

BookCover.getInstance.$inject = ['AggregionAPI'];

export default BookCover;
