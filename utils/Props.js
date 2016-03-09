"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

exports.default = {
  pick: function pick(props, fields) {
    var has = function has(p) {
      return props.hasOwnProperty(p);
    };
    var obj = {};
    (fields || []).forEach(function (field) {
      if (has(field)) obj[field] = props[field];
    });
    return obj;
  }
};
module.exports = exports['default'];