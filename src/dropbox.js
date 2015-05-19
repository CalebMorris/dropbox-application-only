import _ from 'lodash';

import api from './api';

function attachProto(className, token) {
  _.each(api(token), (value, key) => {
    className.prototype[key] = value;
  });
}

class DropboxWrapper {
  constructor(token) {
    this._token = token;
    attachProto(DropboxWrapper, token);
  }

  static authenticate(token) {
    return new this(token);
  }
}

export default { DropboxWrapper };
