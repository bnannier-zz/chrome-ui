'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
  _inherits(Posts, _Component);

  function Posts() {
    _classCallCheck(this, Posts);

    return _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).apply(this, arguments));
  }

  _createClass(Posts, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        null,
        this.props.posts.map(function (post, i) {
          return _react2.default.createElement(
            'li',
            { key: i },
            post.title
          );
        })
      );
    }
  }]);

  return Posts;
}(_react.Component);

exports.default = Posts;


Posts.propTypes = {
  posts: _propTypes2.default.array.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZW1vL1Bvc3RzLmpzIl0sIm5hbWVzIjpbIlBvc3RzIiwicHJvcHMiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJpIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs2QkFDVjtBQUNQLGFBQ0k7QUFBQTtBQUFBO0FBQ0csYUFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxpQkFBYTtBQUFBO0FBQUEsY0FBSSxLQUFLQSxDQUFUO0FBQWFELGlCQUFLRTtBQUFsQixXQUFiO0FBQUEsU0FBckI7QUFESCxPQURKO0FBS0Q7Ozs7OztrQkFQa0JOLEs7OztBQVVyQkEsTUFBTU8sU0FBTixHQUFrQjtBQUNoQkwsU0FBTyxvQkFBVU0sS0FBVixDQUFnQkM7QUFEUCxDQUFsQiIsImZpbGUiOiJQb3N0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnBvc3RzLm1hcCgocG9zdCwgaSkgPT4gPGxpIGtleT17aX0+e3Bvc3QudGl0bGV9PC9saT4pfVxuICAgICAgICA8L3VsPlxuICAgIClcbiAgfVxufVxuXG5Qb3N0cy5wcm9wVHlwZXMgPSB7XG4gIHBvc3RzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufVxuIl19