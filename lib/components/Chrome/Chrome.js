'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _configureStore = require('../../utilities/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _registerServiceWorker = require('../../utilities/registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Chrome(routes, reducers) {
  var store = (0, _configureStore2.default)(reducers);

  var routeComponents = _react2.default.createElement(
    'div',
    null,
    routes
  );

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        routeComponents
      )
    )
  ), document.getElementById('root'));
  (0, _registerServiceWorker2.default)();
}

exports.default = Chrome;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Nocm9tZS9DaHJvbWUuanMiXSwibmFtZXMiOlsiQ2hyb21lIiwicm91dGVzIiwicmVkdWNlcnMiLCJzdG9yZSIsInJvdXRlQ29tcG9uZW50cyIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxNQUFoQixFQUF3QkMsUUFBeEIsRUFBa0M7QUFDaEMsTUFBTUMsUUFBUSw4QkFBZUQsUUFBZixDQUFkOztBQUVBLE1BQU1FLGtCQUNGO0FBQUE7QUFBQTtBQUFNSDtBQUFOLEdBREo7O0FBSUEscUJBQVNJLE1BQVQsQ0FDSTtBQUFBO0FBQUEsTUFBVSxPQUFPRixLQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNHQztBQURIO0FBREY7QUFERixHQURKLEVBUU1FLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FSTjtBQVVBO0FBQ0Q7O2tCQUVjUCxNIiwiZmlsZSI6IkNocm9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbmZpZ3VyZVN0b3JlJ1xuaW1wb3J0IHJlZ2lzdGVyU2VydmljZVdvcmtlciBmcm9tICcuLi8uLi91dGlsaXRpZXMvcmVnaXN0ZXJTZXJ2aWNlV29ya2VyJ1xuXG5mdW5jdGlvbiBDaHJvbWUocm91dGVzLCByZWR1Y2Vycykge1xuICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHJlZHVjZXJzKTtcblxuICBjb25zdCByb3V0ZUNvbXBvbmVudHMgPSAoXG4gICAgICA8ZGl2Pntyb3V0ZXN9PC9kaXY+XG4gICk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgIHtyb3V0ZUNvbXBvbmVudHN9XG4gICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuICApO1xuICByZWdpc3RlclNlcnZpY2VXb3JrZXIoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hyb21lO1xuIl19