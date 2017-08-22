import '../../polymer/polymer.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <div>{{someAttr}}</div>
`,

  is: 'attr-reflector',

  properties: {
    someAttr: {
      type: String,
      value: "",
      reflectToAttribute: true
    }
  }
});
