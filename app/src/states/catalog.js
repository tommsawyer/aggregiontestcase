'use strict';

export default {
  resolve    : { 
    loadedBooks : function(AggregionAPI) {
      return AggregionAPI.getAllBooks();
    }
  },
  url        : '/',
  template   : require('../pages/catalog/catalog.html'),
  controller : 'catalogCtrl'
}
