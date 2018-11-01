'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelLooksLike = require('babel-looks-like');

var _babelLooksLike2 = _interopRequireDefault(_babelLooksLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isConsoleLog(_ref) {
  var node = _ref.node;

  return (0, _babelLooksLike2.default)(node, {
    callee: {
      object: { name: 'console' },
      property: { name: 'log' }
    }
  });
}

exports.default = function (_ref2) {
  var t = _ref2.types;

  return {
    visitor: {
      CallExpression: function CallExpression(path) {
        if (isConsoleLog(path)) {
          path.node.arguments.unshift(t.stringLiteral('Bonify rocks'));
        }
      }
    }
  };
};