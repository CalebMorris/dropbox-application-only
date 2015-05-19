import requestHelper from '../../request-helper';

export default function(token) {
  return requestHelper.sendRequest(
    'https://api.dropbox.com/1/account/info',
    token,
    'GET'
  );
}
