import requestHelper from '../../request-helper';

function info(token) {
  console.log('token', token)
  return requestHelper.sendRequest(
    'https://api.dropbox.com/1/account/info',
    token,
    'GET'
  );
}

export default info;
