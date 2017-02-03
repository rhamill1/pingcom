
var CronJob = require('cron').CronJob;
// var job = new CronJob('1,31 6-23 * * *', function() {
var job = new CronJob('* * * * *', function() {

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

        System.out.println('request url: ' + url);
        System.out.println('response status: ' + response.statusCode);
        System.out.println('');
      };
    });
  };

  for (var i = 0; i < urls.length; i++) {
    var url = urls[i];
    scrape(url);
  };

  console.log('');

}, function () {
  console.log('');
  console.log('');
  console.log('-------------------------------');
  console.log('TEST_JOB.JS HAS STOPPED RUNNING')
  console.log(Date());

  System.out.println('TEST_JOB.JS HAS STOPPED RUNNING');
});

job.start();

