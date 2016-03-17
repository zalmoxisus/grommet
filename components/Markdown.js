'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // (C) Copyright 2016 Hewlett Packard Enterprise Development LP

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _Paragraph = require('./Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Anchor = require('./Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderComponent() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var component = arguments[1];
  var props = arguments[2];

  var Component = options.component || component;
  var combinedProps = _extends({}, options.props, props);
  return (0, _server.renderToStaticMarkup)((0, _react.createElement)(Component, combinedProps));
}

var Markdown = function Markdown(props) {

  var renderer = new _marked2.default.Renderer();

  renderer.heading = function (text, level) {
    return renderComponent(props.components.Heading, _Heading2.default, { tag: 'h' + level, dangerouslySetInnerHTML: { __html: text } });
  };

  renderer.image = function (href, title, text) {
    return renderComponent(props.components.Image, _Image2.default, { src: href, caption: title });
  };

  renderer.link = function (href, title, text) {
    return renderComponent(props.components.Anchor, _Anchor2.default, { href: href, title: title, label: text });
  };

  renderer.paragraph = function (text) {
    return renderComponent(props.components.Paragraph, _Paragraph2.default, { dangerouslySetInnerHTML: { __html: text } });
  };

  var html = (0, _marked2.default)(props.content || '', { renderer: renderer, sanitize: true });

  return _react2.default.createElement('div', { className: 'markdown', dangerouslySetInnerHTML: { __html: html } });
};

Markdown.propTypes = {
  content: _react.PropTypes.string,
  components: _react.PropTypes.shape({
    props: _react.PropTypes.object
  })
};

Markdown.defaultProps = {
  components: {},
  content: ''
};

exports.default = Markdown;
module.exports = exports['default'];