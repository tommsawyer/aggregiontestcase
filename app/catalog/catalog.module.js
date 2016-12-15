'use strict';

import angular           from 'angular';

import './assets/styles/styles.css';
import 'angular-material/angular-material.css';
import 'angular-ui-router/release/angular-ui-router.js';

import ngMaterial        from 'angular-material';
import ngAggregion       from '../aggregion/aggregion.module.js';

import catalogConfig     from './catalog.routes.js';
import CatalogController from './pages/catalog/catalogCtrl.js';
import BookController    from './pages/book/bookCtrl.js';

angular
  .module('ngAggregionCatalog', [ ngMaterial, ngAggregion, 'ui.router' ])
  .config(catalogConfig)
  .controller('catalogCtrl',    CatalogController)
  .controller('bookCtrl',       BookController);
