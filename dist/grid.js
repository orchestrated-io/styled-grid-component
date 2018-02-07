'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  display: grid;\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    grid-template-columns: ', ';\n  '], ['\n    grid-template-columns: ', ';\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    grid-gap: ', ';\n  '], ['\n    grid-gap: ', ';\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    grid-row-gap: ', ';\n  '], ['\n    grid-row-gap: ', ';\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    grid-auto-rows: ', ';\n  '], ['\n    grid-auto-rows: ', ';\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    width: ', ';\n  '], ['\n    width: ', ';\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    height: ', ';\n  '], ['\n    height: ', ';\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Grid = _styledComponents2.default.div(_templateObject, (0, _styledIs2.default)('templateColumns')(_templateObject2, function (props) {
  return props.templateColumns;
}), (0, _styledIs2.default)('gap')(_templateObject3, function (props) {
  return props.gap;
}), (0, _styledIs2.default)('rowGap')(_templateObject4, function (props) {
  return props.rowGap;
}), (0, _styledIs2.default)('autoRows')(_templateObject5, function (props) {
  return props.autoRows;
}), (0, _styledIs2.default)('width')(_templateObject6, function (props) {
  return props.width;
}), (0, _styledIs2.default)('height')(_templateObject7, function (props) {
  return props.height;
}));

exports.default = Grid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmlkLmpzIl0sIm5hbWVzIjpbIkdyaWQiLCJkaXYiLCJwcm9wcyIsInRlbXBsYXRlQ29sdW1ucyIsImdhcCIsInJvd0dhcCIsImF1dG9Sb3dzIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLDJCQUFPQyxHQUFkLGtCQUVGLHdCQUFHLGlCQUFILENBRkUsbUJBR3VCO0FBQUEsU0FBU0MsTUFBTUMsZUFBZjtBQUFBLENBSHZCLEdBS0Ysd0JBQUcsS0FBSCxDQUxFLG1CQU1VO0FBQUEsU0FBU0QsTUFBTUUsR0FBZjtBQUFBLENBTlYsR0FRRix3QkFBRyxRQUFILENBUkUsbUJBU2M7QUFBQSxTQUFTRixNQUFNRyxNQUFmO0FBQUEsQ0FUZCxHQVdGLHdCQUFHLFVBQUgsQ0FYRSxtQkFZZ0I7QUFBQSxTQUFTSCxNQUFNSSxRQUFmO0FBQUEsQ0FaaEIsR0FjRix3QkFBRyxPQUFILENBZEUsbUJBZU87QUFBQSxTQUFTSixNQUFNSyxLQUFmO0FBQUEsQ0FmUCxHQWlCRix3QkFBRyxRQUFILENBakJFLG1CQWtCUTtBQUFBLFNBQVNMLE1BQU1NLE1BQWY7QUFBQSxDQWxCUixFQUFOOztrQkFzQmVSLEkiLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGlzIGZyb20gJ3N0eWxlZC1pcyc7XG5cbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2IGBcbiAgZGlzcGxheTogZ3JpZDtcbiAgJHtpcygndGVtcGxhdGVDb2x1bW5zJylgXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAke3Byb3BzID0+IHByb3BzLnRlbXBsYXRlQ29sdW1uc307XG4gIGB9O1xuICAke2lzKCdnYXAnKWBcbiAgICBncmlkLWdhcDogJHtwcm9wcyA9PiBwcm9wcy5nYXB9O1xuICBgfTtcbiAgJHtpcygncm93R2FwJylgXG4gICAgZ3JpZC1yb3ctZ2FwOiAke3Byb3BzID0+IHByb3BzLnJvd0dhcH07XG4gIGB9O1xuICAke2lzKCdhdXRvUm93cycpYFxuICAgIGdyaWQtYXV0by1yb3dzOiAke3Byb3BzID0+IHByb3BzLmF1dG9Sb3dzfTtcbiAgYH07XG4gICR7aXMoJ3dpZHRoJylgXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICBgfTtcbiAgJHtpcygnaGVpZ2h0JylgXG4gICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH07XG4gIGB9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiJdfQ==