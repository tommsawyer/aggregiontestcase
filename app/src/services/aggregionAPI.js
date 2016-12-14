'use strict';

class AggregionAPI {
  constructor($resource) {
    this.resource = $resource;
  }

  getAllBooks() {
    return this.resource('https://ds.aggregion.com/api/public/catalog', {}, { 
        get: { method: 'GET', isArray: true }
      }).get().$promise;
  }

  getBookCover(id) {
    return new Promise(function(resolve, reject) {
      var image = document.createElement('img');
      image.src = 'https://storage.aggregion.com/api/files/' + id + '/shared/data';

      image.onerror = function(event) {
        event.preventDefault();
        image.src = 'https://storage.aggregion.com/api/files/12ce171be47031a58f6d12ddefca93d52bda709b1b720d50cf48747d6cd44cb6/shared/data';
        reject(image);
      };

      image.onload = function() {
        resolve(image);
      };
    });
  }

  static getInstance($resource) {
    AggregionAPI.instance = AggregionAPI.instance ||  new AggregionAPI($resource);
    return AggregionAPI.instance;
  }
}

AggregionAPI.getInstance.inject = [ '$resource' ];

export default AggregionAPI;
