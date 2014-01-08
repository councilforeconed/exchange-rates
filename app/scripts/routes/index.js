ExchangeRates.IndexRoute = Ember.Route.extend({
  model: function () {
    if (localStorage.rates) {
      console.log('Pulling from localStorage.');
      return JSON.parse(localStorage.rates)
    } else {
      return Em.$.getJSON(ExchangeRates.CurrentRatesAPILocation)
        .then(function (response) {
          var rates = { current: response.rates };
          return Em.$.getJSON(ExchangeRates.TwoMonthsAgoAPILocation)
            .then(function (response) {
              rates.twoMonthsAgo = response.rates;
              localStorage.rates = JSON.stringify(rates);
              return rates;
            })
        });
    }
  },
  setupController: function (controller, model) {
    controller.set('model', model);
  }
});