'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    grid-column: ', ''], ['\n    grid-column: ', '']),
    _templateObject3 = _taggedTemplateLiteral(['\n    grid-row: ', ''], ['\n    grid-row: ', '']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GridItem = _styledComponents2.default.div(_templateObject, (0, _styledIs2.default)('column')(_templateObject2, function (props) {
  return props.column;
}), (0, _styledIs2.default)('row')(_templateObject3, function (props) {
  return props.row;
}));

exports.default = GridItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pdGVtLmpzIl0sIm5hbWVzIjpbIkdyaWRJdGVtIiwiZGl2IiwicHJvcHMiLCJjb2x1bW4iLCJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFdBQVcsMkJBQU9DLEdBQWxCLGtCQUNGLHdCQUFHLFFBQUgsQ0FERSxtQkFFYTtBQUFBLFNBQVNDLE1BQU1DLE1BQWY7QUFBQSxDQUZiLEdBR0Ysd0JBQUcsS0FBSCxDQUhFLG1CQUlVO0FBQUEsU0FBU0QsTUFBTUUsR0FBZjtBQUFBLENBSlYsRUFBTjs7a0JBT2VKLFEiLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGlzIGZyb20gJ3N0eWxlZC1pcyc7XG5cbmNvbnN0IEdyaWRJdGVtID0gc3R5bGVkLmRpdmBcbiAgJHtpcygnY29sdW1uJylgXG4gICAgZ3JpZC1jb2x1bW46ICR7cHJvcHMgPT4gcHJvcHMuY29sdW1ufWB9O1xuICAke2lzKCdyb3cnKWBcbiAgICBncmlkLXJvdzogJHtwcm9wcyA9PiBwcm9wcy5yb3d9YH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkSXRlbTtcbiJdfQ==