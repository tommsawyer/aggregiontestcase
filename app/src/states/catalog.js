'use strict';

export default {
  resolve      : { 
    loadedBooks: function(AggregionResource) {
      return AggregionResource.books().get().$promise;
    }
  },
  url          : '/',
  template     : require('../pages/catalog/catalog.html'),
  controller   : 'catalogCtrl',
  controllerAs : 'catalog',
}
