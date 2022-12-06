const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
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

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'otavio',
      abilities: ['JS', 'CSHARP'],
    };
    expect(queryString(obj)).toBe('name=otavio&abilities=JS,CSHARP');
  });

  it('should throw an error when an object an array is passed as value', () => {
    const obj = {
      name: 'otavio',
      abilities: {
        first: 'JS',
        second: 'CSHARP',
      },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=otavio&job=dev';
    // parse(qs);
    expect(parse(qs)).toEqual({
      name: 'otavio',
      job: 'dev',
    });
  });

  it('should convert a query string of a single key-value to object', () => {
    const qs = 'name=otavio';
    // console.log(parse(qs));
    expect(parse(qs)).toEqual({
      name: 'otavio',
    });
  });
});
