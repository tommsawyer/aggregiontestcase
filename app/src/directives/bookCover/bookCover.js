'use strict';

class BookCover {
  constructor(AggregionAPI) {
    this.api = AggregionAPI;

    this.restrict = 'E';
    this.template = '<img/>';
    this.replace  = true;
  }

  link(scope, element, attrs) {
    attrs.$observe('id', (id) => attrs.$set('src', AggregionAPI.getImageUrl(id)));

    element.bind('error', function() {
      attrs.$set('src', AggregionAPI.DEFAULT_COVER);
    });
  }
  
  static getInstance(AggregionAPI) {
    return new BookCover(AggregionAPI);
  }
}

BookCover.getInstance.$inject = ['AggregionAPI'];

export default BookCover;
