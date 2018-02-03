'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Actions = require('./Actions');

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _Posts = require('./Posts');

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description Login component - renders the login page
 */
var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleRefreshClick = _this.handleRefreshClick.bind(_this);

        // const queryProps = queryString.parse(this.props.location.search);
        // urlParam(queryProps.sig || queryProps.oauth_key_signature, queryProps.id || queryProps.oauth_key);
        // this.props.mofo("reactjs")

        //login({providerId: 1, providerSig: 2, body: 3});
        return _this;
    }

    _createClass(Login, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                dispatch = _props.dispatch,
                selectedSubreddit = _props.selectedSubreddit;

            dispatch((0, _Actions.fetchPostsIfNeeded)(selectedSubreddit));
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
                var _props2 = this.props,
                    dispatch = _props2.dispatch,
                    selectedSubreddit = _props2.selectedSubreddit;

                dispatch((0, _Actions.fetchPostsIfNeeded)(selectedSubreddit));
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(nextSubreddit) {
            this.props.dispatch((0, _Actions.selectSubreddit)(nextSubreddit));
            this.props.dispatch((0, _Actions.fetchPostsIfNeeded)(nextSubreddit));
        }
    }, {
        key: 'handleRefreshClick',
        value: function handleRefreshClick(e) {
            e.preventDefault();

            var _props3 = this.props,
                dispatch = _props3.dispatch,
                selectedSubreddit = _props3.selectedSubreddit;

            dispatch((0, _Actions.invalidateSubreddit)(selectedSubreddit));
            dispatch((0, _Actions.fetchPostsIfNeeded)(selectedSubreddit));
        }
    }, {
        key: 'render',
        value: function render() {
            var _props4 = this.props,
                selectedSubreddit = _props4.selectedSubreddit,
                posts = _props4.posts,
                isFetching = _props4.isFetching,
                lastUpdated = _props4.lastUpdated;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Picker2.default, {
                    value: selectedSubreddit,
                    onChange: this.handleChange,
                    options: ['reactjs', 'frontend']
                }),
                _react2.default.createElement(
                    'p',
                    null,
                    lastUpdated && _react2.default.createElement(
                        'span',
                        null,
                        'Last updated at ',
                        new Date(lastUpdated).toLocaleTimeString(),
                        '.',
                        ' '
                    ),
                    !isFetching && _react2.default.createElement(
                        'a',
                        { href: '#', onClick: this.handleRefreshClick },
                        'Refresh'
                    )
                ),
                isFetching && posts.length === 0 && _react2.default.createElement(
                    'h2',
                    null,
                    'Loading...'
                ),
                !isFetching && posts.length === 0 && _react2.default.createElement(
                    'h2',
                    null,
                    'Empty.'
                ),
                posts.length > 0 && _react2.default.createElement(
                    'div',
                    { style: { opacity: isFetching ? 0.5 : 1 } },
                    _react2.default.createElement(_Posts2.default, { posts: posts })
                )
            );
        }
    }]);

    return Login;
}(_react.Component);

Login.propTypes = {
    selectedSubreddit: _propTypes2.default.string.isRequired,
    posts: _propTypes2.default.array.isRequired,
    isFetching: _propTypes2.default.bool.isRequired,
    lastUpdated: _propTypes2.default.number,
    dispatch: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
    var selectedSubreddit = state.selectedSubreddit,
        postsBySubreddit = state.postsBySubreddit;

    var _ref = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    },
        isFetching = _ref.isFetching,
        lastUpdated = _ref.lastUpdated,
        posts = _ref.items;

    return {
        selectedSubreddit: selectedSubreddit,
        posts: posts,
        isFetching: isFetching,
        lastUpdated: lastUpdated
    };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // login: (data) => dispatch(login(data)),
//    // urlParam: (providerId, providerSig) => this.props.dispatch(urlParam(providerId, providerSig))
//     mofo: (someval) => dispatch(fetchPostsIfNeeded(someval))
//   }
// }

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Login);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZW1vL0RlbW8uanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVSZWZyZXNoQ2xpY2siLCJkaXNwYXRjaCIsInNlbGVjdGVkU3VicmVkZGl0IiwicHJldlByb3BzIiwibmV4dFN1YnJlZGRpdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3RzIiwiaXNGZXRjaGluZyIsImxhc3RVcGRhdGVkIiwiRGF0ZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImxlbmd0aCIsIm9wYWNpdHkiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicG9zdHNCeVN1YnJlZGRpdCIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFNQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLEs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLGNBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4QixPQUExQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFUZTtBQVVsQjs7Ozs0Q0FFbUI7QUFBQSx5QkFDd0IsS0FBS0YsS0FEN0I7QUFBQSxnQkFDUkksUUFEUSxVQUNSQSxRQURRO0FBQUEsZ0JBQ0VDLGlCQURGLFVBQ0VBLGlCQURGOztBQUVoQkQscUJBQVMsaUNBQW1CQyxpQkFBbkIsQ0FBVDtBQUNIOzs7MkNBRWtCQyxTLEVBQVc7QUFDMUIsZ0JBQUksS0FBS04sS0FBTCxDQUFXSyxpQkFBWCxLQUFpQ0MsVUFBVUQsaUJBQS9DLEVBQWtFO0FBQUEsOEJBQ3RCLEtBQUtM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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrQkFFZSx5QkFBUVksZUFBUixFQUF5QnpCLEtBQXpCLEMiLCJmaWxlIjoiRGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHtcbiAgc2VsZWN0U3VicmVkZGl0LFxuICBmZXRjaFBvc3RzSWZOZWVkZWQsXG4gIGludmFsaWRhdGVTdWJyZWRkaXRcbn0gZnJvbSAnLi9BY3Rpb25zJ1xuXG5pbXBvcnQgUGlja2VyIGZyb20gJy4vUGlja2VyJ1xuaW1wb3J0IFBvc3RzIGZyb20gJy4vUG9zdHMnXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIExvZ2luIGNvbXBvbmVudCAtIHJlbmRlcnMgdGhlIGxvZ2luIHBhZ2VcbiAqL1xuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVSZWZyZXNoQ2xpY2sgPSB0aGlzLmhhbmRsZVJlZnJlc2hDbGljay5iaW5kKHRoaXMpXG5cbiAgICAgICAgLy8gY29uc3QgcXVlcnlQcm9wcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgLy8gdXJsUGFyYW0ocXVlcnlQcm9wcy5zaWcgfHwgcXVlcnlQcm9wcy5vYXV0aF9rZXlfc2lnbmF0dXJlLCBxdWVyeVByb3BzLmlkIHx8IHF1ZXJ5UHJvcHMub2F1dGhfa2V5KTtcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5tb2ZvKFwicmVhY3Rqc1wiKVxuXG4gICAgICAgIC8vbG9naW4oe3Byb3ZpZGVySWQ6IDEsIHByb3ZpZGVyU2lnOiAyLCBib2R5OiAzfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgZGlzcGF0Y2gsIHNlbGVjdGVkU3VicmVkZGl0IH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGRpc3BhdGNoKGZldGNoUG9zdHNJZk5lZWRlZChzZWxlY3RlZFN1YnJlZGRpdCkpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFN1YnJlZGRpdCAhPT0gcHJldlByb3BzLnNlbGVjdGVkU3VicmVkZGl0KSB7XG4gICAgICAgICAgICBjb25zdCB7IGRpc3BhdGNoLCBzZWxlY3RlZFN1YnJlZGRpdCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hQb3N0c0lmTmVlZGVkKHNlbGVjdGVkU3VicmVkZGl0KSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShuZXh0U3VicmVkZGl0KSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2VsZWN0U3VicmVkZGl0KG5leHRTdWJyZWRkaXQpKVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGZldGNoUG9zdHNJZk5lZWRlZChuZXh0U3VicmVkZGl0KSlcbiAgICB9XG5cbiAgICBoYW5kbGVSZWZyZXNoQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB7IGRpc3BhdGNoLCBzZWxlY3RlZFN1YnJlZGRpdCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBkaXNwYXRjaChpbnZhbGlkYXRlU3VicmVkZGl0KHNlbGVjdGVkU3VicmVkZGl0KSlcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQb3N0c0lmTmVlZGVkKHNlbGVjdGVkU3VicmVkZGl0KSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWRTdWJyZWRkaXQsIHBvc3RzLCBpc0ZldGNoaW5nLCBsYXN0VXBkYXRlZCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UGlja2VyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFN1YnJlZGRpdH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbJ3JlYWN0anMnLCAnZnJvbnRlbmQnXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7bGFzdFVwZGF0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBMYXN0IHVwZGF0ZWQgYXQge25ldyBEYXRlKGxhc3RVcGRhdGVkKS50b0xvY2FsZVRpbWVTdHJpbmcoKX0uXG4gICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICB7IWlzRmV0Y2hpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlZnJlc2hDbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWZyZXNoXG4gICAgICAgICAgICAgICAgICAgIDwvYT59XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIHtpc0ZldGNoaW5nICYmIHBvc3RzLmxlbmd0aCA9PT0gMCAmJiA8aDI+TG9hZGluZy4uLjwvaDI+fVxuICAgICAgICAgICAgICAgIHshaXNGZXRjaGluZyAmJiBwb3N0cy5sZW5ndGggPT09IDAgJiYgPGgyPkVtcHR5LjwvaDI+fVxuICAgICAgICAgICAgICAgIHtwb3N0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvcGFjaXR5OiBpc0ZldGNoaW5nID8gMC41IDogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFBvc3RzIHBvc3RzPXtwb3N0c30vPlxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5Mb2dpbi5wcm9wVHlwZXMgPSB7XG4gICAgc2VsZWN0ZWRTdWJyZWRkaXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwb3N0czogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgaXNGZXRjaGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBsYXN0VXBkYXRlZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkU3VicmVkZGl0LCBwb3N0c0J5U3VicmVkZGl0IH0gPSBzdGF0ZVxuICAgIGNvbnN0IHtcbiAgICAgICAgaXNGZXRjaGluZyxcbiAgICAgICAgbGFzdFVwZGF0ZWQsXG4gICAgICAgIGl0ZW1zOiBwb3N0c1xuICAgIH0gPSBwb3N0c0J5U3VicmVkZGl0W3NlbGVjdGVkU3VicmVkZGl0XSB8fCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdGVkU3VicmVkZGl0LFxuICAgICAgICBwb3N0cyxcbiAgICAgICAgaXNGZXRjaGluZyxcbiAgICAgICAgbGFzdFVwZGF0ZWRcbiAgICB9XG59XG5cbi8vIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIC8vIGxvZ2luOiAoZGF0YSkgPT4gZGlzcGF0Y2gobG9naW4oZGF0YSkpLFxuLy8gICAgLy8gdXJsUGFyYW06IChwcm92aWRlcklkLCBwcm92aWRlclNpZykgPT4gdGhpcy5wcm9wcy5kaXNwYXRjaCh1cmxQYXJhbShwcm92aWRlcklkLCBwcm92aWRlclNpZykpXG4vLyAgICAgbW9mbzogKHNvbWV2YWwpID0+IGRpc3BhdGNoKGZldGNoUG9zdHNJZk5lZWRlZChzb21ldmFsKSlcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTG9naW4pXG4iXX0=