import Component from '@ember/component';
import Cleave from 'cleave.js';
import { isPresent } from '@ember/utils';

export default Component.extend({
  tagName: 'input',
  attributeBindings: ['placeholder', 'type', 'disabled'],

  type: 'text',

  keyUp() {
    if (this.onChange) {
      this.onChange(this.element.value);
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this.set('cleave', new Cleave(`#${this.elementId}`, this.options));
    this._setDefaultValue();
  },

  didReceiveAttrs() {
    this._super(...arguments);

    if (!this.options) {
      throw new Error('Missing options object');
    }
  },

  _setDefaultValue() {
    const { value } = this;

    if (isPresent(value))
      this.cleave.onInput(value.toString());
  }
});
