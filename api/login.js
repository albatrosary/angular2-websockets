exports = module.exports = function(app) {
  var items = [
  {
    userid: "123456789",
    password: "zaq12wsx",
    name: "テスト1"
  },
  {
    userid: "aaaa",
    password: "zaq12wsx",
    name: "テスト2"
  }];
  
  app.get('/api/login', function(req, res) {
    res.status(200).json(items);
  });
  
  app.post('/api/login', function(req, res) {
    var userid = req.body.login;
    var password = req.body.password;
    
    console.log('userid', userid)
    console.log('password', password)
    
    var item = items.filter(function(item, index) {
      if (item.userid === userid) {
        return true;
      }
    });
    
    console.log(item[0]);
    
    if (item[0].password === password ) {
      res.status(200).json(item[0]);
    } else {
      res.status(404);
    }
  });
};