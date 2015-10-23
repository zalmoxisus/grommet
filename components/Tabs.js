// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

'use strict';

var React = require('react');

var Box = require('./Box');

var CLASS_ROOT = "tabs";

var Tabs = React.createClass({
  displayName: 'Tabs',

  propTypes: {
    activeIndex: React.PropTypes.number
  },

  contextTypes: {
    intl: React.PropTypes.object.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      initialIndex: 0
    };
  },

  getInitialState: function getInitialState() {
    return {
      activeIndex: this.props.initialIndex
    };
  },

  _activateTab: function _activateTab(index) {
    this.setState({ activeIndex: index });
  },

  render: function render() {
    var classes = [CLASS_ROOT];

    var activeContainer;
    var activeTitle;

    var tabs = React.Children.map(this.props.children, (function (tab, index) {

      var tabProps = tab.props || tab._store.props || {};

      var isTabActive = index === this.state.activeIndex;

      if (isTabActive) {
        activeContainer = tabProps.children;
        activeTitle = tabProps.title;
      }

      return React.cloneElement(tab, {
        active: isTabActive,
        id: 'tab-' + index,
        onRequestForActive: (function () {
          this._activateTab(index);
        }).bind(this)
      });
    }).bind(this));

    var tabContentsLabel = this.context.intl.formatMessage({
      id: "Tab Contents", defaultMessage: "Tab Contents"
    });

    return React.createElement(
      'div',
      { role: 'tablist' },
      React.createElement(
        'ul',
        { className: classes.join(' ') },
        tabs
      ),
      React.createElement(
        'div',
        { ref: 'tabContent', tabIndex: '0', 'aria-labelledby': 'content_description',
          role: 'tabpanel' },
        React.createElement(
          'title',
          { id: 'content_description' },
          activeTitle + ' ' + tabContentsLabel
        ),
        React.createElement(
          Box,
          { className: CLASS_ROOT + '__content', 'aria-labelledby': 'content_description' },
          activeContainer
        )
      )
    );
  }

});

module.exports = Tabs;