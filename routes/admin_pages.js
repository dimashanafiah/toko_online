var express = require('express');
var router = express.Router();

//setup index
router.get("/", function(req,res){
    res.send('admin yaa');
});

//exports
module.exports = router;