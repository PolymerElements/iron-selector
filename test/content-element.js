import '../iron-selector.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <iron-selector id="selector" selected="{{selected}}" selectable="[[selectable]]" attr-for-selected="id">
      <slot></slot>
    </iron-selector>
`,

  is: 'test-content-element',

  properties: {

    selectable: String,

    selected: {
      type: String,
      notify: true
    }

  },

  get selector() {
    return this.$.selector;
  }
});
