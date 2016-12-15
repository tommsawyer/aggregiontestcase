'use strict';

import angular           from 'angular';

import './src/styles.css';
import 'angular-material/angular-material.css';
import 'angular-ui-router/release/angular-ui-router.js';

import ngMaterial        from 'angular-material';
import ngResource        from 'angular-resource';

import AggregionAPI      from './src/services/aggregion.constants.js';
import AggregionResource from './src/services/aggregion.resource.js';
import BookCover         from './src/directives/bookCover/bookCover.js';
import catalogConfig     from './src/catalog.routes.js';
import CatalogController from './src/pages/catalog/catalogCtrl.js';
import BookController    from './src/pages/book/bookCtrl.js';

angular
  .module('catalogApp', [ ngMaterial, ngResource, 'ui.router' ])
  .config(catalogConfig)
  .constant('AggregionAPI',     AggregionAPI)
  .factory('AggregionResource', AggregionResource.getInstance)
  .directive('bookCover',       BookCover.getInstance)
  .controller('catalogCtrl',    CatalogController)
  .controller('bookCtrl',       BookController);
