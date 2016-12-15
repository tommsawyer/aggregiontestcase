'use strict';

class BookCover {
  constructor(AggregionAPI) {
    this.AggregionAPI = AggregionAPI;

    this.restrict = 'E';
    this.template = '<img/>';
    this.replace  = true;
  }

  link(scope, element, attrs) {
    var self = this;
    attrs.$observe('id', (id) => attrs.$set('src', this.AggregionAPI.getResourceUrl(id)));

    element.bind('error', function() {
      attrs.$set('src', self.AggregionAPI.DEFAULT_COVER);
    });
  }
  
  static getInstance(AggregionAPI) {
    return new BookCover(AggregionAPI);
  }
}

BookCover.getInstance.$inject = ['AggregionAPI'];

export default BookCover;
