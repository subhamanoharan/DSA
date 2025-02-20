import recursiveArrayAdd from './index'

describe('Recursive Array Add', () => {
    test('when array is empty', () => {
        expect(recursiveArrayAdd([])).toEqual(0);
      });
  
      test('when array has single elememnt', () => {
        expect(recursiveArrayAdd([4])).toEqual(4);
      });
  
      test('when array has multiple elements', () => {
        expect(recursiveArrayAdd([4, 16, 10, 2, 67, 27])).toEqual(126);
      });
})