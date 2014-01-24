ExchangeRates.CurrencyField = Ember.View.extend({
  tagName: 'div',
  classNameBindings: ['hasError'],
  amount: function () {
    console.log(this.get('value'));
    return this.get('value');
  }.property('value'),
  hasError: function () {
    return !this.get('amount');
  }.property('amount')
});
