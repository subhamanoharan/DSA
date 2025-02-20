import recursiveArrayMax from './index'

describe('Recursive Array Count', () => {
    test('when array is empty', () => {
        expect(recursiveArrayMax([])).toEqual(0);
      });
  
      test('when array has single elememnt', () => {
        expect(recursiveArrayMax([4])).toEqual(4);
      });
  
      test('when array has multiple elements', () => {
        expect(recursiveArrayMax([4, 16, 10, 2, 67, 27])).toEqual(67);
      });
})