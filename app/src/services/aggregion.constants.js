'use strict';

export default {
  DEFAULT_COVER: 'https://storage.aggregion.com/api/files/12ce171be47031a58f6d12ddefca93d52bda709b1b720d50cf48747d6cd44cb6/shared/data',
  BASE_URL: 'https://ds.aggregion.com/api/',

  getImageUrl: function (id) {
    return 'https://storage.aggregion.com/api/files/' + id + '/shared/data';
  }
};
