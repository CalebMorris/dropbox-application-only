var token = process.env.DROPBOX_APP_KEY;
var client = require('../dist')
  .authenticate(token);

client.metadata()
  .then(function(response) {
    console.log('response', response);
  })
  .catch(function(failure) {
    console.error('status: ', failure.statusCode);
    console.error('error: ', failure.message && failure.message.error);
  });
