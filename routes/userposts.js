const express = require('express');
const router = express.Router({mergeParams: true});
const { userList, postList, } = require ('../data');

//configuración

router.get('/', function (req, res) {
    let userId = req.params.userId;
    res.json({ message: 'posts de userId; ' + userId});
});

router.get('/:postId', function(req, res){
    let userId = req.params.userId;
    let postId = req.params.postId;

    res.json({ message: 'post id ' + postid + ' userId: ' + userId});

});


module.exports = router;

