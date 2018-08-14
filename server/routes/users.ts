const User     = require('../models/User');
module.exports = [
  {
    method: 'POST',
    path: '/users',
    handler: function (request, h) {
      const {name, nickname} = request.payload;
      const user             = new User({name, nickname});
      return user.save();
    }
  },
  {
    method: 'GET',
    path: '/users',
    handler: function () {
      return User.find();
    }
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: function () {
    }
  }
];