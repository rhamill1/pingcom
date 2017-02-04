var express = require('express'),
  app = express();

app.use(express.static('public'));

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 8000, function () {
  console.log('Express server is running on http://localhost:8000/');
});

