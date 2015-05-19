import requestHelper from '../request-helper';

export default function(token, path) {
  return requestHelper.sendRequest(
    `https://api-content.dropbox.com/1/files/auto/${path}`,
    token,
    'GET'
  );
}
