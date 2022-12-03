const queryString = obj => {
  const query = Object.entries(obj)
    .map(item => {
      return `${item[0]}=${item[1]}`;
    })
    .join('&');

  return query;
};

module.exports = {
  queryString,
};
