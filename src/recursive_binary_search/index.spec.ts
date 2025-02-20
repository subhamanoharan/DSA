import recBinarySearch from './index'

describe("recursive binary search", () => {
    test('when array is empty', () => {
      expect(recBinarySearch([], 4)).toBe(-1);
    });

    test('when array has single elememnt', () => {
      expect(recBinarySearch([4], 4)).toBe(0);
    });

    test('when array has multiple elements and element exists', () => {
      expect(recBinarySearch([4, 6, 10], 6)).toBe(1);
    });

    test('when array has multiple elements and element does not exist', () => {
      expect(recBinarySearch([4, 6, 10], 16)).toBe(-1);
    });

    test('when array has multiple even elements', () => {
      expect(recBinarySearch([4, 6, 10, 15], 6)).toBe(1);
    });
})