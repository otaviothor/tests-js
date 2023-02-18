const keyAndValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value))
    throw new Error('Please check your params');

  return `${key}=${value}`;
};

const queryString = obj =>
  Object.entries(obj).map(keyAndValueToString).join('&');

const parse = qs =>
  Object.fromEntries(
    qs.split('&').map(item => {
      let [key, value] = item.split('=');
      if (value.indexOf(',') > -1) value = value.split(',');

      return [key, value];
    }),
  );

export { queryString, parse };
