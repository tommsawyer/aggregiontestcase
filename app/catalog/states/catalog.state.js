'use strict';

export default {
  resolve      : { 
    loadedBooks: function(AggregionResource) {
      return AggregionResource.book().query().$promise;
    }
  },
  url          : '/',
  template     : require('../pages/catalog/catalog.html'),
  controller   : 'catalogCtrl',
  controllerAs : 'catalog',
}
