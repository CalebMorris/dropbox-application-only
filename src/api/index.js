import account from './account';
import files from './files';
import metadata from './metadata';

export default function(token) {
  return {
    account : account(token),
    files : files.bind(null, token),
    metadata : metadata.bind(null, token),
  };
}
