import selectionSort from './index'

describe('Selection Sort', () => {
    test('when array is empty', () => {
        expect(selectionSort([])).toEqual([]);
      });
  
      test('when array has single elememnt', () => {
        expect(selectionSort([4])).toEqual([4]);
      });
  
      test('when array has multiple elements', () => {
        expect(selectionSort([4, 16, 10, 2, 67, 27])).toEqual([2, 4, 10, 16, 27, 67]);
      });
})