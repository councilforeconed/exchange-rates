ExchangeRates.CurrencyFieldComponent = Ember.Component.extend({
  tagName: 'div',
  classNames: ['form-group'],
  classNameBindings: ['hasError'],
  hasError: function () {
    return !this.get('amount');
  }.property('amount')
});