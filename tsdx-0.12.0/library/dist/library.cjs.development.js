'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _tailwindUtils = _interopDefault(require('tailwind.macro/utils.umd.js'));
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _tailwindConfig =
/*#__PURE__*/
_tailwindUtils.resolveConfig({});
// Delete me
var Comp =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject(),
/*#__PURE__*/
Object.assign(
/*#__PURE__*/
_tailwindUtils.resolveStyle(_tailwindConfig, [{
  "prop": "color",
  "config": "textColor"
}, {
  "prop": "fontSize",
  "config": "fontSize"
}], "xs")));

exports.Comp = Comp;
//# sourceMappingURL=library.cjs.development.js.map
