'use strict';

import angular              from 'angular';
import ngResource           from 'angular-resource';

import AggregionAPI         from './services/aggregion.constants.js';
import AggregionInterceptor from './services/aggregion.interceptor.js';
import AggregionResource    from './services/aggregion.resource.js';
import BookCover            from './directives/aggregion.bookcover.js';

angular
  .module('ngAggregion', [ngResource])
  .constant('AggregionAPI',        AggregionAPI)
  .factory('AggregionInterceptor', AggregionInterceptor.getInstance)
  .factory('AggregionResource',    AggregionResource.getInstance)
  .directive('bookCover',          BookCover.getInstance)

export default 'ngAggregion';
