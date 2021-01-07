var express = require('express');
var router = express.Router();

//messages
let messages = [{
  text: "What is the meaning of life?",
  user: "Bob",
  added: new Date(),
},
{
  text: "What is existence?",
  user: "Jim",
  added: new Date(),
}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Talk to into the void', messages:messages });
});

router.post("/new", (req,res) => {
  messages.push({text: req.body.messageText, user:req.body.userText, added: new Date()});
  res.redirect("/");
  res.send("Post Request from new");
});

module.exports = router;
