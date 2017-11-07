var request = require('request');
var secret = require('./secret');

console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url : "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + secret.GITHUB_TOKEN
    },
     json: true
  };

  console.log("optinos", options);

  request(options, function(err, res, body) {
    cb(err, body);



    console.log(cb(body.avatar_url))
  });
}




getRepoContributors("jquery", "jquery", function(err, contributors) {
  console.log("Errors:", err);
  contributors.forEach(function(contributor){
    console.log(contributor.avatar_url);
  })

});
