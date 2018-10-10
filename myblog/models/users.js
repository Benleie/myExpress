var User = require('../lib/mongo').User;

module.exports = {
  // 注册一个用户
  create: function create(user) {
    return User.create(user).exec();
  },
  // 通过用户名获取用户信息
  getUserByName: function getUserByName(name) {
    return User
      .findOne({ name: name })
      .addCreatedAt()
      .exec();
  },

  getUserById: function(id) {
    return User
      .findOne({ _id: id })
      .addCreatedAt()
      .exec();
  },

  // 通过user id 给 pv 加 1
  incPv: function incPv(id) {
    return User
      .update({ _id: id }, { $inc: { pv: 1 } })
      .exec();
  },
};

