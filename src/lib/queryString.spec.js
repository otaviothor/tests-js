const { queryString } = require('./queryString');

describe('Objeto to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'otavio',
      job: 'dev',
    };
    // queryString(obj);
    expect(queryString(obj)).toBe('name=otavio&job=dev');
  });

  it('should create a invalid query string when an object is provided', () => {
    const obj = {
      name: 'otavio',
      job: 'dev',
    };
    // queryString(obj);
    // in this case, we have a comparision between `name=otavio&job=dev` and `name=otavio*job=dev`
    expect(queryString(obj)).not.toBe('name=otavio*job=dev');
  });
});
