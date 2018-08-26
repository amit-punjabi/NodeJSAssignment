var request = require('request');

var user = process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME';
var key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY';

var options = {
    url: 'https://api.browserstack.com/automate/plan.json',
    auth: {
        'user': user,
        'pass': key
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);

// Write your code here
// Assert if parallel_sessions_max_allowed is equal to 2