'use strict';

export default {
  resolve: {
    loadedBook: function(AggregionAPI, $stateParams) {
      return AggregionAPI.getBookInfo($stateParams.book_id);
    }
  },
  url: '/book/{:book_id}',
  template: require('../pages/book/book.html'),
  controller: 'bookCtrl'
}
