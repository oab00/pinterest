'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  user: Object,
  url: String
});

module.exports = mongoose.model('Thing', ThingSchema);