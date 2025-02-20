import quickSort from './index'

describe('Quick Sort', () => {
    test('when array is empty', () => {
        expect(quickSort([])).toEqual([]);
      });
  
    test('when array has single elememnt', () => {
      expect(quickSort([4])).toEqual([4]);
    });

    test('when array has two elements', () => {
      expect(quickSort([4, 1])).toEqual([1, 4]);
    });
  
    test('when array has multiple elements', () => {
      expect(quickSort([4, 16, 10, 2, 67, 27])).toEqual([2, 4, 10, 16, 27, 67]);
    });
})