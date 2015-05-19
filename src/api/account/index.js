import info from './info';

export default (token) => {
  return { info : info.bind(null, token) };
};
