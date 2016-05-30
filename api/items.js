exports = module.exports = function(app) {
  var items = [
  {
    "userid": "123456789",
    "password": "zaq12wsx",
    "name": "テスト1"
  },
  {
    "userid": "aaaa",
    "password": "zaq12wsx",
    "name": "テスト2"
  }];
  
  app.get('/api/items', function(req, res) {
    res.status(200).json(items);
  });
};