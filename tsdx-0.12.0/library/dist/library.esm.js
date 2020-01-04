import _tailwindUtils from 'tailwind.macro/utils.umd.js';
import styled from 'styled-components';

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

export { Comp };
//# sourceMappingURL=library.esm.js.map
