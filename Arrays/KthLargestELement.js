function findKthLargest(arr, k) {
    if (k < 1 || k > arr.length) {
      return "Invalid k value";
    }
  
    const newSet = new Set(arr)
    const newArr = [...newSet]
    // Sort the array in descending order
    newArr.sort((a, b) => b - a);

    console.log(newArr)
  
    // Return the kth largest element
    return newArr[k - 1];
  }
  
  // Example usage:
  const arr = [3, 3, 1, 1, 4, 4, 1, 5, 5, 9,9,9, 9, 2, 6, 6, 6];
  const k = 3; // Find the 3rd largest element
  console.log(findKthLargest(arr, k)); // Output: 6
  