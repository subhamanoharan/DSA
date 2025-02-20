import recursiveArrayCount from './index'

describe('Recursive Array Count', () => {
    test('when array is empty', () => {
        expect(recursiveArrayCount([])).toEqual(0);
      });
  
      test('when array has single elememnt', () => {
        expect(recursiveArrayCount([4])).toEqual(1);
      });
  
      test('when array has multiple elements', () => {
        expect(recursiveArrayCount([4, 16, 10, 2, 67, 27])).toEqual(6);
      });
})