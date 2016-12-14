'use strict';

import stateNotFound from './states/notFound.js';
import stateCatalog  from './states/catalog.js';

const html5ModeConfig = { enabled: true, requireBase: false };

const catalogConfig = function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(html5ModeConfig);

  $stateProvider
    .state('catalog', stateCatalog)
    .state('404',     stateNotFound);

  $urlRouterProvider.otherwise('/not_found');
};

export default catalogConfig;
