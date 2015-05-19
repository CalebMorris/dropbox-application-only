import Promise from 'bluebird';
import request from 'request';

/*
  @param {string} url - API URL path
  @param {string} token - OAuth2 Token
  @param {string=} method - HTTP method
  @return {Promise}
*/
function sendRequest(url, token, method) {

  return new Promise((resolve, reject) => {

    const options = {
      headers : { 'Authorization' : `Bearer ${token}` },
      url : url,
      method : method,
    };

    function callback(error, response, body) {
      if (error) {

        return reject(error);

      } else if (response.statusCode !== 200) {

        return reject(response);

      }

      return resolve(JSON.parse(body));
    }

    request(options, callback);

  });

}

export default { sendRequest };
