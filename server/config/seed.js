/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    user: { name: 'test user' },
    url: 'http://i.imgur.com/ognYZHF.jpg'
  }, {
    user: { name: 'test user' },
    url: 'http://i.imgur.com/UgLkINJ.jpg'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test',
    email: 'a@a',
    password: 'aaa'
  }, function() {
      console.log('finished populating users');
    }
  );
});