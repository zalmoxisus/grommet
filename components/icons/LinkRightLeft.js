'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinkNext = require('./base/LinkNext');

var _LinkNext2 = _interopRequireDefault(_LinkNext);

var _LinkPrevious = require('./base/LinkPrevious');

var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = "right-left-icon";

var LinkRightLeft = function (_Component) {
  _inherits(LinkRightLeft, _Component);

  function LinkRightLeft() {
    _classCallCheck(this, LinkRightLeft);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LinkRightLeft).apply(this, arguments));
  }

  _createClass(LinkRightLeft, [{
    key: 'render',
    value: function render() {
      var classes = [CLASS_ROOT];
      var _props = this.props;
      var a11yTitle = _props.a11yTitle;
      var size = _props.size;

      if (this.props.className) {
        classes.push(this.props.className);
      }
      return _react2.default.createElement(
        'span',
        { className: classes.join(' ') },
        _react2.default.createElement(_LinkNext2.default, { className: CLASS_ROOT + '--right', a11yTitle: a11yTitle, size: size }),
        _react2.default.createElement(_LinkPrevious2.default, { className: CLASS_ROOT + '--left', a11yTitle: a11yTitle, size: size })
      );
    }
  }]);

  return LinkRightLeft;
}(_react.Component);

exports.default = LinkRightLeft;

LinkRightLeft.propTypes = {
  a11yTitle: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large'])
};
module.exports = exports['default'];