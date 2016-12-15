'use strict';

class AggregionResource {
  constructor($resource, AggregionAPI) {
    this.resource = $resource;
    this.API      = AggregionAPI;
  }

  books() {
    return this.resource(API.BASE_URL + '/public/catalog', {}, { 
        get: { method: 'GET', isArray: true }
      });
  }

  book(id) {
    return this.resource(API.BASE_URL + '/public/catalog/:id', { id: id }, { 
        get: { method: 'GET'}
      });
  }

  bookBundles(id) {
    return this.resource(API.BASE_URL + '/public/catalog/:id/bundles', { id: id }, { 
        get: { method: 'GET', isArray: true }
      });
  }

  static getInstance($resource) {
    AggregionResource.instance = AggregionResource.instance ||  new AggregionResource($resource);
    return AggregionResource.instance;
  }
}

AggregionResource.getInstance.inject = [ '$resource', 'AggregionAPI' ];

export default AggregionResource;
