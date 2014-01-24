ExchangeRates.CurrencyField = Ember.View.extend({
  tagName: 'div',
  template: Ember.Handlebars.compile('{{view ExchangeRates.NumberField type="number" min="0" class="form-control" value=amount}}'),
  classNameBindings: ['hasError'],
  amount: function () {
    console.log(this.get('value'));
    return this.get('value');
  }.property('value'),
  hasError: function () {
    return !this.get('amount');
  }.property('amount')
});
