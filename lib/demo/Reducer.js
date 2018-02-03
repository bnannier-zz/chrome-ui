'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _Actions = require('./Actions');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function selectedSubreddit() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'reactjs';
    var action = arguments[1];

    switch (action.type) {
        case _Actions.SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
}

function posts() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        isFetching: false,
        didInvalidate: false,
        items: []
    };
    var action = arguments[1];

    switch (action.type) {
        case _Actions.INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case _Actions.REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case _Actions.RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

function postsBySubreddit() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _Actions.INVALIDATE_SUBREDDIT:
        case _Actions.RECEIVE_POSTS:
        case _Actions.REQUEST_POSTS:
            return Object.assign({}, state, _defineProperty({}, action.subreddit, posts(state[action.subreddit], action)));
        default:
            return state;
    }
}

var reducers = (0, _redux.combineReducers)({
    postsBySubreddit: postsBySubreddit,
    selectedSubreddit: selectedSubreddit
});

exports.default = reducers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZW1vL1JlZHVjZXIuanMiXSwibmFtZXMiOlsic2VsZWN0ZWRTdWJyZWRkaXQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJzdWJyZWRkaXQiLCJwb3N0cyIsImlzRmV0Y2hpbmciLCJkaWRJbnZhbGlkYXRlIiwiaXRlbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJsYXN0VXBkYXRlZCIsInJlY2VpdmVkQXQiLCJwb3N0c0J5U3VicmVkZGl0IiwicmVkdWNlcnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBT0EsU0FBU0EsaUJBQVQsR0FBc0Q7QUFBQSxRQUEzQkMsS0FBMkIsdUVBQW5CLFNBQW1CO0FBQUEsUUFBUkMsTUFBUTs7QUFDbEQsWUFBUUEsT0FBT0MsSUFBZjtBQUNJO0FBQ0ksbUJBQU9ELE9BQU9FLFNBQWQ7QUFDSjtBQUNJLG1CQUFPSCxLQUFQO0FBSlI7QUFNSDs7QUFFRCxTQUFTSSxLQUFULEdBT0U7QUFBQSxRQU5FSixLQU1GLHVFQU5VO0FBQ0pLLG9CQUFZLEtBRFI7QUFFSkMsdUJBQWUsS0FGWDtBQUdKQyxlQUFPO0FBSEgsS0FNVjtBQUFBLFFBREVOLE1BQ0Y7O0FBQ0UsWUFBUUEsT0FBT0MsSUFBZjtBQUNJO0FBQ0ksbUJBQU9NLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCVCxLQUFsQixFQUF5QjtBQUM1Qk0sK0JBQWU7QUFEYSxhQUF6QixDQUFQO0FBR0o7QUFDSSxtQkFBT0UsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JULEtBQWxCLEVBQXlCO0FBQzVCSyw0QkFBWSxJQURnQjtBQUU1QkMsK0JBQWU7QUFGYSxhQUF6QixDQUFQO0FBSUo7QUFDSSxtQkFBT0UsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JULEtBQWxCLEVBQXlCO0FBQzVCSyw0QkFBWSxLQURnQjtBQUU1QkMsK0JBQWUsS0FGYTtBQUc1QkMsdUJBQU9OLE9BQU9HLEtBSGM7QUFJNUJNLDZCQUFhVCxPQUFPVTtBQUpRLGFBQXpCLENBQVA7QUFNSjtBQUNJLG1CQUFPWCxLQUFQO0FBbEJSO0FBb0JIOztBQUVELFNBQVNZLGdCQUFULEdBQThDO0FBQUEsUUFBcEJaLEtBQW9CLHVFQUFaLEVBQVk7QUFBQSxRQUFSQyxNQUFROztBQUMxQyxZQUFRQSxPQUFPQyxJQUFmO0FBQ0k7QUFDQTtBQUNBO0FBQ0ksbUJBQU9NLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCVCxLQUFsQixzQkFDRkMsT0FBT0UsU0FETCxFQUNpQkMsTUFBTUosTUFBTUMsT0FBT0UsU0FBYixDQUFOLEVBQStCRixNQUEvQixDQURqQixFQUFQO0FBR0o7QUFDSSxtQkFBT0QsS0FBUDtBQVJSO0FBVUg7O0FBRUQsSUFBTWEsV0FBVyw0QkFBZ0I7QUFDN0JELHNDQUQ2QjtBQUU3QmI7QUFGNkIsQ0FBaEIsQ0FBakI7O2tCQUtlYyxRIiwiZmlsZSI6IlJlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge1xuICBTRUxFQ1RfU1VCUkVERElULFxuICBJTlZBTElEQVRFX1NVQlJFRERJVCxcbiAgUkVRVUVTVF9QT1NUUyxcbiAgUkVDRUlWRV9QT1NUU1xufSBmcm9tICcuL0FjdGlvbnMnO1xuXG5mdW5jdGlvbiBzZWxlY3RlZFN1YnJlZGRpdChzdGF0ZSA9ICdyZWFjdGpzJywgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFNFTEVDVF9TVUJSRURESVQ6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnN1YnJlZGRpdDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBvc3RzKFxuICAgIHN0YXRlID0ge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgIH0sXG4gICAgYWN0aW9uXG4pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgSU5WQUxJREFURV9TVUJSRURESVQ6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICBjYXNlIFJFUVVFU1RfUE9TVFM6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICBjYXNlIFJFQ0VJVkVfUE9TVFM6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtczogYWN0aW9uLnBvc3RzLFxuICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBhY3Rpb24ucmVjZWl2ZWRBdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBvc3RzQnlTdWJyZWRkaXQoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIElOVkFMSURBVEVfU1VCUkVERElUOlxuICAgICAgICBjYXNlIFJFQ0VJVkVfUE9TVFM6XG4gICAgICAgIGNhc2UgUkVRVUVTVF9QT1NUUzpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIFthY3Rpb24uc3VicmVkZGl0XTogcG9zdHMoc3RhdGVbYWN0aW9uLnN1YnJlZGRpdF0sIGFjdGlvbilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBwb3N0c0J5U3VicmVkZGl0LFxuICAgIHNlbGVjdGVkU3VicmVkZGl0XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnM7XG4iXX0=