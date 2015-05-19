import account from './account';

export default function(token) {
  return { account : account(token) };
}
