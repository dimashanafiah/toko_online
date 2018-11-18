var express = require('express');
var router = express.Router();

//setup index
router.get("/", function(req,res){
    res.render('index', {
        title: "Happy Shopping"
    });
});

//exports
module.exports = router;