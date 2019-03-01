import Component from '@ember/component';
import Cleave from 'cleave.js';

export default Component.extend({
  tagName: 'input',
  attributeBindings: ['placeholder', 'type'],

  type: 'text',

  didInsertElement() {
    this._super(...arguments);
    this.set('cleave', new Cleave(`#${this.elementId}`, this.options));
  },

  didReceiveAttrs() {
    this._super(...arguments);
    if (!this.options) {
      throw new Error('Missing options object');
    }
  }
});
