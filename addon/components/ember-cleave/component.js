import Component from '@ember/component';
import layout from './template';
import Cleave from 'cleave.js';

export default Component.extend({
  layout,

  didInsertElement() {
    this._super(...arguments);
    this.set('cleave', new Cleave(this.inputClass, this.options));
  }
});
