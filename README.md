# Dropbox-Application-Only

A Dropbox API wrapper through OAuth2 and the single app per account access.

This methodology doesn't require user acknowledgement beyond intial config
 from generated token.

[How to generate a OAuth2 Token](https://blogs.dropbox.com/developers/2014/05/generate-an-access-token-for-your-own-account/)

# Example

```javascript

var client = require('dropbox-application-only').authenticate(config.token);

client.metadata()
  .then(function(response) {
    console.log('response', response);
  })
  .catch(function(failure) {
    console.error('status', failure.status);
    console.error('error', failure.error);
  });


```

# Note : This project is in early revisions and is subject to change.
