'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger.createLogger)();

function configureStore(reducers) {
    return (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJsb2dnZXJNaWRkbGV3YXJlIiwicmVkdWNlcnMiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQU13QkEsYzs7QUFOeEI7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1DLG1CQUFtQixnQ0FBekI7O0FBRWUsU0FBU0QsY0FBVCxDQUF3QkUsUUFBeEIsRUFBa0M7QUFDL0MsV0FBTyx3QkFDSEEsUUFERyxFQUVILGtEQUVJRCxnQkFGSixDQUZHLENBQVA7QUFPRCIsImZpbGUiOiJjb25maWd1cmVTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInXG5cbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSBjcmVhdGVMb2dnZXIoKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShyZWR1Y2Vycykge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgICByZWR1Y2VycyxcbiAgICAgIGFwcGx5TWlkZGxld2FyZShcbiAgICAgICAgICB0aHVua01pZGRsZXdhcmUsXG4gICAgICAgICAgbG9nZ2VyTWlkZGxld2FyZVxuICAgICAgKVxuICApXG59XG4iXX0=