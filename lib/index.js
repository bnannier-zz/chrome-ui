'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _index = require('./components/index');

var _Demo = require('./demo/Demo');

var _Demo2 = _interopRequireDefault(_Demo);

var _Reducer = require('./demo/Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description Wire-up Phoenix with Login Component.
 */
(0, _index.Chrome)(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _Demo2.default })
), _Reducer2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7OztBQUdBLG1CQUNJO0FBQUE7QUFBQTtBQUNFLHNEQUFPLFdBQVAsRUFBYSxNQUFLLEdBQWxCLEVBQXNCLHlCQUF0QjtBQURGLENBREoiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IENocm9tZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5kZXhcIlxuaW1wb3J0IERlbW8gZnJvbSAnLi9kZW1vL0RlbW8nXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9kZW1vL1JlZHVjZXInXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFdpcmUtdXAgUGhvZW5peCB3aXRoIExvZ2luIENvbXBvbmVudC5cbiAqL1xuQ2hyb21lIChcbiAgICA8ZGl2PlxuICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17RGVtb30gLz5cbiAgICA8L2Rpdj5cbiAgICAsIHJlZHVjZXJzXG4pO1xuIl19