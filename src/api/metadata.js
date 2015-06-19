import requestHelper from '../request-helper';

export default function(token, path = '') {
  return requestHelper.sendRequest(
    `https://api.dropbox.com/1/metadata/auto/${path}`,
    token,
    'GET'
  );
}
