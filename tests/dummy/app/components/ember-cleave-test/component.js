import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  defaultNumeralValue: 100000,

  creditCardOptions: computed(function() {
    return {
      creditCard: true,
      onCreditCardTypeChanged: this._cardNameLogger.bind(this)
    }
  }),


  dateOptions: computed(function() {
    return {
      date: true,
      datePattern: ['Y', 'm', 'd']
    }
  }),

  timeOptions: computed(function() {
    return {
      time: true,
      timePattern: ['h', 'm', 's']
    }
  }),

  numeralOptions: computed(function() {
    return {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand'
    }
  }),

  customOptions: computed(function() {
    return {
      blocks: [4, 3, 3, 4],
      uppercase: true
    }
  }),

  customOptionsWithDelimiter: computed(function() {
    return {
      delimiter: '.',
      blocks: [4, 3, 3, 4],
      uppercase: true
    }
  }),

  customOptionsWithPrefix: computed(function() {
    return {
      delimiter: '-',
      prefix: 'Ember',
      blocks: [5, 3, 3, 4]
    }
  }),


  _cardNameLogger(type) {
    this.set('cardName', type);
  }
});
