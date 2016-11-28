// A simple command line application that consumes github API using a HTTP client library.
function getGithubUserProfile(username) {
	// we require node https module
	const http = require('https');
	// we configure the https options
	var options = {
		host: 'api.github.com',
		path: '/users/' + username,
		method: 'GET',
		headers: {'user-agent': 'node.js'}
	};

	// we make the actual request
	http.get(options, function(resp) {
	  resp.on('data', function(data) {

	    console.log(data.toString());

	  });
	}).on("error", function(e) {
	  console.log("Got error: " + e.message);
	});
}

// we call the function
getGithubUserProfile('nwosuchiamaka');