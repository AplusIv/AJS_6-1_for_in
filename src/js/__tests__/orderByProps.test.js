import orderByProps from '../orderByProps';

// ??? Не понимаю, как покрыть все строки тестами (8, 18)
// ??? И почему линтер ругается на имена test и expect функций?

// eslint-disable-next-line no-undef
test('should sort by certain properties and alphabetically', () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    // { key: 'def', value: 'immortal' },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  const obj = {
    name: 'мечник',
    health: 10,
    // def: 'immortal',
    level: 2,
    attack: 80,
    defence: 40,
  };

  const result = orderByProps(obj, ['name', 'level']);
  expect(obj).toHaveProperty('name'); // строка 8 orderByProps.js
  expect(obj).toHaveProperty('level'); // строка 8 orderByProps.js

  for (const prop in obj) {
    expect(obj[prop]).toBeTruthy(); // строка 18 orderByProps.js
  };

  expect(result).toEqual(expected);
});
