import { capitalize, reverseString, calculator, caesar, analyzeArray } from './functions';

describe('capitalize', () => {
  test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});

describe('reverseString', () => {
    test('reverseString', () => {
      expect(reverseString('hello')).toBe('olleh');
    });
  });

describe('calculator', () => {
    test('add', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
    test('subtract', () => {
        expect(calculator.subtract(1, 2)).toBe(-1);
      });
    test('divide', () => {
        expect(calculator.divide(1, 2)).toBe(0.5);
      });
    test('multiply', () => {
        expect(calculator.multiply(1, 2)).toBe(2);
      });
  } );

describe('caesar', () => {
    test('caesar', () => {
      expect(caesar('hello', 1)).toBe('ifmmp');
    });
  });

describe('analyzeArray', () => {
    test('analyzeArray', () => {
      expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
    })
})