'use strict';

class AggregionResource {
  constructor($resource, AggregionAPI, AggregionInterceptor) {
    this.resource    = $resource;
    this.API         = AggregionAPI;
    this.interceptor = AggregionInterceptor;
  }

  book(id) {
    return this.resource(this.API.BASE_URL + '/public/catalog/:id', {}, {
      get:     { params: { id: id }, interceptor: this.interceptor},
      query:   { interceptor: this.interceptor, isArray: true },
      bundles: { method: 'GET', isArray: true, params: { id: id + '/bundles/' }, interceptor: this.interceptor }
    });
  }

  static getInstance($resource, AggregionAPI, AggregionInterceptor) {
    AggregionResource.instance = AggregionResource.instance ||  new AggregionResource($resource, AggregionAPI, AggregionInterceptor);
    return AggregionResource.instance;
  }
}

AggregionResource.getInstance.inject = [ '$resource', 'AggregionAPI', 'AggregionInterceptor' ];

export default AggregionResource;
