// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

'use strict';

var React = require('react');
var ReactIntl = require('react-intl');
var FormattedMessage = ReactIntl.FormattedMessage;

var SkipLinkAnchor = React.createClass({
  displayName: 'SkipLinkAnchor',

  propTypes: {
    label: React.PropTypes.string.isRequired
  },

  render: function render() {
    var id = 'skip-link-' + this.props.label.toLowerCase().replace(/ /g, '_');

    var labelFormatted = React.createElement(FormattedMessage, { id: this.props.label, defaultMessage: this.props.label });

    return React.createElement('a', { tabIndex: '-1', id: id, className: 'skip-link-anchor',
      'data-skip-label': labelFormatted });
  }

});

module.exports = SkipLinkAnchor;