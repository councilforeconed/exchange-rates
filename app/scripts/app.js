var ExchangeRates = window.ExchangeRates = Ember.Application.create();

ExchangeRates.APIKey = 'd5edefa7fba5427eb53875edfd944af7';
ExchangeRates.CurrentRatesAPILocation = 'https://openexchangerates.org/api/latest.json?app_id=' + ExchangeRates.APIKey;
ExchangeRates.TwoMonthsAgo = moment().subtract('months', 2).format('YYYY-MM-DD');
ExchangeRates.TwoMonthsAgoAPILocation = 'https://openexchangerates.org/api/historical/' + ExchangeRates.TwoMonthsAgo + '.json?app_id=' + ExchangeRates.APIKey;

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/helpers/*');
require('scripts/router');
