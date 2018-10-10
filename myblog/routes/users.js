var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;
var PostModel = require('../models/posts');
var CommentModel = require('../models/comments');
var UserModel = require('../models/users');

router.get("/:userId", function(req, res, next){
	var userId = req.params.userId,
		  user;

  UserModel.incPv(userId)
      .catch(next);
      
  UserModel.getUserById(userId)
       .then(function(USER){
          user = USER;
          // console.log(user.name + " router/users");
       })
       .catch(next);
  // console.log(userId)
  

	PostModel.getPosts(userId)
    .then(function (posts) {
      res.render('users', {
        posts: posts,
        user: user
      });
    })
    .catch(next);
})


module.exports = router;