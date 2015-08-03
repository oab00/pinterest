/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  //Thing.create({});
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test',
    email: 'a@a',
    password: 'aaa'
  },
  {
    provider: 'local',
    name: 'Test2',
    email: 'b@b',
    password: 'bbb'
  }, function() {
      console.log('finished populating users');
    }
  );
});