
var CronJob = require('cron').CronJob;
var job = new CronJob('1,31 6-23 * * *', function() {

  var request = require('request');
  var urls = new Array(
    'http://www.ryanhamill.com',
    'https://farmersmarketipsum.herokuapp.com/',
    'https://amzpro.herokuapp.com',
    'http://womensmarchtweets.herokuapp.com/'
  );

  function scrape(url){
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('request url: ' + url);
        console.log('response status: ' + response.statusCode)
        console.log(Date());
        console.log('');
      };
    });
  };

  for (var i = 0; i < urls.length; i++) {
    var url = urls[i];
    scrape(url);
  };

  console.log('');

}, function () {
  /* This function is executed when the job stops */
});

job.start();

