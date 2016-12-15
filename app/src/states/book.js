'use strict';

export default {
  resolve: {
    loadedBook: function(AggregionResource, $stateParams) {
      return AggregionResource.book($stateParams.book_id).get().$promise;
    },
    bundles: function(AggregionResource, $stateParams) {
      return AggregionResource.bookBundles($stateParams.book_id).get().$promise;
    }
  },
  url         : '/book/:book_id',
  template    : require('../pages/book/book.html'),
  controller  : 'bookCtrl',
  controllerAs: 'book'
}
