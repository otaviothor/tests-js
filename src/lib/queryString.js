const keyAndValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value))
    throw new Error('Please check your params');

  return `${key}=${value}`;
};

const queryString = obj =>
  Object.entries(obj).map(keyAndValueToString).join('&');

const parse = qs =>
  Object.fromEntries(qs.split('&').map(item => item.split('=')));

module.exports = {
  queryString,
  parse,
};
