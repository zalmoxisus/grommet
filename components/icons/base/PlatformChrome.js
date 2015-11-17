// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

'use strict';

var React = require('react');
var FormattedMessage = require('../../../components/FormattedMessage');

var CLASS_ROOT = "control-icon";

var Icon = React.createClass({
  displayName: 'Icon',

  propTypes: {
    a11yTitle: React.PropTypes.string,
    a11yTitleId: React.PropTypes.string,
    colorIndex: React.PropTypes.string,
    large: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      a11yTitleId: 'platform-chrome-title'
    };
  },

  render: function render() {
    var classes = [CLASS_ROOT, CLASS_ROOT + '-platform-chrome'];
    if (this.props.large) {
      classes.push(CLASS_ROOT + "--large");
    }
    if (this.props.colorIndex) {
      classes.push("color-index-" + this.props.colorIndex);
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }

    var titleLabel = typeof this.props.a11yTitle !== "undefined" ? this.props.a11yTitle : "platform-chrome";
    var a11yTitle = React.createElement(FormattedMessage, { id: titleLabel, defaultMessage: titleLabel });

    return React.createElement(
      'svg',
      { version: '1.1', viewBox: '0 0 48 48', width: '48px', height: '48px', className: classes.join(' '), 'aria-labelledby': this.props.a11yTitleId },
      React.createElement(
        'title',
        { id: this.props.a11yTitleId },
        a11yTitle
      ),
      React.createElement(
        'g',
        { id: 'platform-chrome' },
        React.createElement('rect', { id: '_x2E_svg_302_', x: '0', y: '0', fill: 'none', width: '48', height: '48' }),
        React.createElement('path', { d: 'M17.9167,22.4657l-3.4346-5.9489c2.199-2.7533,5.584-4.5177,9.3816-4.5177c4.3933,0,8.2344,2.3612,10.3257,5.8832h-9.7922 c-0.1759-0.0152-0.3537-0.0234-0.5335-0.0234C21.0071,17.8589,18.5998,19.8195,17.9167,22.4657z M28.1603,19.6169h6.8785 c0.533,1.3578,0.8259,2.8362,0.8259,4.3831c0,6.5823-5.2996,11.926-11.8646,11.9991l4.908-8.5009 c0.691-0.9933,1.0968-2.1992,1.0968-3.4983C30.0048,22.285,29.2978,20.7321,28.1603,19.6169z M19.504,24 c0-2.4039,1.9558-4.3597,4.3597-4.3597S28.2234,21.5961,28.2234,24s-1.9558,4.3597-4.3597,4.3597S19.504,26.4039,19.504,24z M25.5087,29.917l-3.4357,5.9507C16.2946,35.0032,11.8629,30.0193,11.8629,24c0-2.1381,0.5598-4.1451,1.5399-5.8838l4.8995,8.4863 c0.9814,2.0887,3.1051,3.5386,5.5615,3.5386C24.4333,30.1411,24.985,30.0628,25.5087,29.917z' })
      )
    );
  }

});

module.exports = Icon;