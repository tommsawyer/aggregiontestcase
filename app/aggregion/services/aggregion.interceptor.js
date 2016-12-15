'use strict';

class AggregionInterceptor {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
    this.responseError = this.responseError.bind(this);
  }

  responseError (data) {
    this.$rootScope.$broadcast('aggregionError', data);
  }
  
  static getInstance($resource, AggregionAPI) {
    AggregionInterceptor.instance = AggregionInterceptor.instance || new AggregionInterceptor($resource, AggregionAPI);
    return AggregionInterceptor.instance;
  }
}

AggregionInterceptor.getInstance.$inject = ['$rootScope'];


export default AggregionInterceptor;
