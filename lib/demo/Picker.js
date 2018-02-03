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

var Picker = function (_Component) {
  _inherits(Picker, _Component);

  function Picker() {
    _classCallCheck(this, Picker);

    return _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));
  }

  _createClass(Picker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          _onChange = _props.onChange,
          options = _props.options;


      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'h1',
          null,
          value
        ),
        _react2.default.createElement(
          'select',
          { onChange: function onChange(e) {
              return _onChange(e.target.value);
            }, value: value },
          options.map(function (option) {
            return _react2.default.createElement(
              'option',
              { value: option, key: option },
              option
            );
          })
        )
      );
    }
  }]);

  return Picker;
}(_react.Component);

exports.default = Picker;


Picker.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired).isRequired,
  value: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZW1vL1BpY2tlci5qcyJdLCJuYW1lcyI6WyJQaWNrZXIiLCJwcm9wcyIsInZhbHVlIiwib25DaGFuZ2UiLCJvcHRpb25zIiwiZSIsInRhcmdldCIsIm1hcCIsIm9wdGlvbiIsInByb3BUeXBlcyIsImFycmF5T2YiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7OzZCQUNWO0FBQUEsbUJBQzhCLEtBQUtDLEtBRG5DO0FBQUEsVUFDQ0MsS0FERCxVQUNDQSxLQUREO0FBQUEsVUFDUUMsU0FEUixVQUNRQSxRQURSO0FBQUEsVUFDa0JDLE9BRGxCLFVBQ2tCQSxPQURsQjs7O0FBR1AsYUFDSTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBS0Y7QUFBTCxTQURBO0FBRUE7QUFBQTtBQUFBLFlBQVEsVUFBVTtBQUFBLHFCQUFLQyxVQUFTRSxFQUFFQyxNQUFGLENBQVNKLEtBQWxCLENBQUw7QUFBQSxhQUFsQixFQUFpRCxPQUFPQSxLQUF4RDtBQUNHRSxrQkFBUUcsR0FBUixDQUFZO0FBQUEsbUJBQ1Q7QUFBQTtBQUFBLGdCQUFRLE9BQU9DLE1BQWYsRUFBdUIsS0FBS0EsTUFBNUI7QUFDR0E7QUFESCxhQURTO0FBQUEsV0FBWjtBQURIO0FBRkEsT0FESjtBQVlEOzs7Ozs7a0JBaEJrQlIsTTs7O0FBbUJyQkEsT0FBT1MsU0FBUCxHQUFtQjtBQUNqQkwsV0FBUyxvQkFBVU0sT0FBVixDQUFrQixvQkFBVUMsTUFBVixDQUFpQkMsVUFBbkMsRUFBK0NBLFVBRHZDO0FBRWpCVixTQUFPLG9CQUFVUyxNQUFWLENBQWlCQyxVQUZQO0FBR2pCVCxZQUFVLG9CQUFVVSxJQUFWLENBQWVEO0FBSFIsQ0FBbkIiLCJmaWxlIjoiUGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgb25DaGFuZ2UsIG9wdGlvbnMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuPlxuICAgICAgICA8aDE+e3ZhbHVlfTwvaDE+XG4gICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17dmFsdWV9PlxuICAgICAgICAgIHtvcHRpb25zLm1hcChvcHRpb24gPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtvcHRpb259IGtleT17b3B0aW9ufT5cbiAgICAgICAgICAgICAgICB7b3B0aW9ufVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG59XG5cblBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn1cbiJdfQ==