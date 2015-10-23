// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

'use strict';

var React = require('react');
var IntlProvider = require('react-intl').IntlProvider;
var Locale = require('../utils/Locale');
var SkipLinks = require('./SkipLinks');

var Locale = require('../utils/Locale');

var App = React.createClass({
  displayName: 'App',

  propTypes: {
    centered: React.PropTypes.bool,
    locale: React.PropTypes.string,
    messages: React.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      centered: true
    };
  },

  render: function render() {
    var classes = ["app"];
    if (this.props.centered) {
      classes.push("app--centered");
    }
    if (this.props.inline) {
      classes.push("app--inline");
    }

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var localeData = Locale.getLocaleData(this.props.messages || {}, this.props.locale);

    return React.createElement(
      IntlProvider,
      { locale: localeData.locale, messages: localeData.messages },
      React.createElement(
        'div',
        { lang: localeData.locale, className: classes.join(' ') },
        React.createElement(SkipLinks, null),
        this.props.children
      )
    );
  }
});

module.exports = App;
