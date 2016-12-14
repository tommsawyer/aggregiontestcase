'use strict';

export default {
  resolve    : { 
    loadedBooks : function(AggregionAPI) {
      return AggregionAPI.getAllBooks();
    }
  },
  url        : '/app/',
  template   : require('../pages/catalog/catalog.html'),
  controller : 'catalogCtrl'
}
