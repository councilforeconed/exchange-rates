ExchangeRates.IndexController = Ember.Controller.extend({
  currencies: function () {
    return Object.keys(this.get('content.current'));
  }.property(),
  currencySelected: 'EUR',
  amountUSD: 1,
  amountForeign: 1,
  dateToday: function () {
    return moment().format('MMMM Do, YYYY');
  }.property(),
  dateTwoMonthsAgo: function () {
    return moment().subtract('months', 2).format('MMMM Do, YYYY');
  }.property(),
  foreignRate: function () {
    return this.get('content.current.' + this.get('currencySelected'));
  }.property('currencySelected', 'content'),
  foreignRateTwoMonthsAgo: function () {
    return this.get('content.twoMonthsAgo.' + this.get('currencySelected'));
  }.property('currencySelected', 'content'),
  USDToForeign: function () {
    return this.get('amountUSD') * this.get('foreignRate');
  }.property('amountUSD', 'currencySelected'),
  ForeignToUSD: function () {
    return this.get('amountForeign') / this.get('foreignRate');
  }.property('amountForeign', 'foreignRate'),
  newExpenseDescription: null,
  newExpenseCost: 0,
  newExpenseCostInCurrentUSD: function () {
    return this.get('newExpenseCost') / this.get('foreignRate');
  }.property('newExpenseCost', 'foreignRate'),
  newExpenseCostInTwoMonthsAgoUSD: function () {
    return this.get('newExpenseCost') / this.get('foreignRateTwoMonthsAgo');
  }.property('newExpenseCost', 'foreignRateTwoMonthsAgo'),
  canSubmitNewForm: function () {
    return this.get('newExpenseDescription') && this.get('newExpenseCost');
  }.property('newExpenseDescription','newExpenseCost'),
  expenses: Em.A([]),
  expenseList: function() { 
    var expenses = [];
    this.get('expenses').forEach(function (e) {
      expenses.push(e);
    })
    return expenses;
  }.property('expenses.@each'),
  
  actions: {
    expenseSubmission: function () {
      var expense = {
        description: this.get('newExpenseDescription'),
        amount: this.get('newExpenseCost'),
        amountInUSDToday: this.get('newExpenseCostInCurrentUSD'),
        amountInUSDTwoMonthsAgo: this.get('newExpenseCostInTwoMonthsAgoUSD'),
        foreignCurrency: this.get('currencySelected'),
        exchangeRateToday: this.get('foreignRate'),
        exchangeRateTwoMonthsAgo: this.get('foreignRateTwoMonthsAgo'),
      }
      
      this.set('newExpenseDescription', null);
      this.set('newExpenseCost', 0);
      
      var expenses = Em.A(this.get('expenses'));
      expenses.push(expense);
      this.set('expenses', null);
      this.set('expenses', expenses);
    }
  }
});