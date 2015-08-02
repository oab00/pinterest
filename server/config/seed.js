/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    user: { name: 'Test' },
    url: 'http://i.imgur.com/ognYZHF.jpg'
  }, {
    user: { name: 'Test2' },
    url: 'http://i.imgur.com/UgLkINJ.jpg'
  });
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