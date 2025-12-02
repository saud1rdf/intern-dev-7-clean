# Algorithms

## Algorithm Fundamentals

### 📘 Overview
Understand what algorithms are and how they solve problems. An algorithm is a step-by-step procedure to solve a specific problem.

### 🧠 Step-by-step Breakdown
1. Define the problem clearly (e.g., finding the maximum number).
2. Break down the solution into specific steps: assumption, comparison, update, and return.
3. Ensure the algorithm satisfies key properties: Input, Output, Definiteness, Finiteness, and Effectiveness.

### 🧩 Code Example
```javascript
// What is an algorithm?
// A step-by-step procedure to solve a problem

// Example: Finding the maximum number in an array
function findMax(arr) {
  // Step 1: Assume first element is maximum
  let max = arr[0];
  
  // Step 2: Compare with each element
  for (let i = 1; i < arr.length; i++) {
    // Step 3: Update max if current is larger
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  // Step 4: Return the result
  return max;
}

// Test the algorithm
console.log(findMax([3, 7, 2, 9, 1])); // Output: 9

// Another example: Checking if number is even
function isEven(n) {
  return n % 2 === 0;
}

// Algorithm properties:
// 1. Input: The data the algorithm processes
// 2. Output: The result
// 3. Definiteness: Each step is clear
// 4. Finiteness: Algorithm terminates
// 5. Effectiveness: Each step is doable
```

### Explanation
An algorithm is simply a sequence of steps to solve a problem. In the `findMax` example, we start by assuming the first number is the largest. Then, we iterate through the rest of the array, comparing each number to our current maximum. If we find a larger number, we update our maximum. Finally, we return the result. This demonstrates the core properties of an algorithm: it has a clear input (the array), a clear output (the max number), and a finite set of effective steps to get from one to the other.
**باختصار بالعربي:** الخوارزمية هي خطوات محددة لحل مشكلة، مثل مقارنة الأرقام للعثور على الأكبر.

### 📝 Notes
Algorithms are the core of computer science, defined by their ability to solve problems efficiently and reliably.
Resources:
- GeeksforGeeks Algorithms
- Programiz DSA

---

## Sorting Algorithms

### 📘 Overview
Learn fundamental sorting algorithms: Bubble Sort, Quick Sort, and Merge Sort. These algorithms demonstrate different strategies for ordering data.

### 🧠 Step-by-step Breakdown
1. Bubble Sort: Repeatedly compare and swap adjacent elements (Simple but slow).
2. Quick Sort: Select a pivot and partition the array around it (Efficient divide and conquer).
3. Merge Sort: Recursively divide the array and merge sorted halves (Stable divide and conquer).

### 🧩 Code Example
```javascript
// Bubble Sort - Simple but slow
function bubbleSort(arr) {
  const n = arr.length;
  
  // Compare adjacent elements
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Swap if wrong order
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}

// Quick Sort - Efficient divide and conquer
function quickSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;
  
  // Choose pivot (middle element)
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const middle = [];
  const right = [];
  
  // Partition
  for (const num of arr) {
    if (num < pivot) left.push(num);
    else if (num > pivot) right.push(num);
    else middle.push(num);
  }
  
  // Recursively sort and combine
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Merge Sort - Divide and conquer
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return [...result, ...left.slice(i), ...right.slice(j)];
}

// Test
console.log(bubbleSort([64, 34, 25, 12, 22]));
console.log(quickSort([64, 34, 25, 12, 22]));
console.log(mergeSort([64, 34, 25, 12, 22]));
```

### Explanation
Sorting is a classic algorithmic problem. `bubbleSort` is the simplest: it repeatedly swaps adjacent elements if they are in the wrong order, "bubbling" the largest values to the top. However, it is slow for large datasets. `quickSort` and `mergeSort` are much faster "divide and conquer" algorithms. `quickSort` picks a "pivot" element and partitions the array into smaller and larger elements, then sorts them recursively. `mergeSort` splits the array in half until single elements remain, then merges them back together in sorted order. These examples highlight the trade-offs between simplicity and efficiency.
**باختصار بالعربي:** خوارزميات الترتيب تختلف في الكفاءة؛ `Bubble Sort` بسيطة وبطيئة، بينما `Quick Sort` و `Merge Sort` أسرع وأكثر تعقيداً.

### 📝 Notes
Understanding different sorting algorithms helps in choosing the right one for specific performance requirements.
Resources:
- JavaScript Algorithms
- Khan Academy Algorithms

---

## Searching Algorithms

### 📘 Overview
Master Linear Search and Binary Search algorithms. These are the primary methods for finding elements within a data structure.

### 🧠 Step-by-step Breakdown
1. Linear Search: Check every element sequentially until the target is found (O(n)).
2. Binary Search: Divide the search interval in half repeatedly (O(log n)).
3. Binary Search requires the data to be sorted beforehand.
4. Implementations can be iterative or recursive.

### 🧩 Code Example
```javascript
// Linear Search - Check each element
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return index if found
    }
  }
  return -1; // Return -1 if not found
}

// Time complexity: O(n)
// Works on unsorted arrays

// Binary Search - Divide in half (requires sorted array)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // Found!
    } else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }
  
  return -1; // Not found
}

// Time complexity: O(log n)
// Much faster but requires sorted array

// Recursive Binary Search
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) return mid;
  
  if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
}

// Test
const numbers = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(linearSearch(numbers, 7)); // Returns 3
console.log(binarySearch(numbers, 7)); // Returns 3
console.log(binarySearchRecursive(numbers, 7)); // Returns 3
```

### Explanation
Searching involves finding a specific value in a collection. `linearSearch` checks every single element one by one; it works on any list but is slow for large ones. `binarySearch` is much faster but requires the list to be *sorted*. It works by repeatedly dividing the search interval in half. If the target value is less than the middle element, it searches the left half; otherwise, the right half. This logarithmic efficiency makes it ideal for large datasets. The code provides both an iterative (loop-based) and a recursive implementation of binary search.
**باختصار بالعربي:** البحث الخطي يفحص كل عنصر، بينما البحث الثنائي (للبيانات المرتبة) يقسم المجال للنصف وهو أسرع بكثير.

### 📝 Notes
Binary Search provides significant performance benefits over Linear Search for large, sorted datasets.
Resources:
- Algorithm Fundamentals
- JavaScript Algorithms Repo

---

## Time and Space Complexity

### 📘 Overview
Learn Big O notation and how to analyze algorithm efficiency. This is crucial for writing scalable code.

### 🧠 Step-by-step Breakdown
1. Use Big O notation to describe how run time or space requirements grow with input size.
2. O(1): Constant time (e.g., accessing an array element).
3. O(n): Linear time (e.g., simple loop).
4. O(n²): Quadratic time (e.g., nested loops).
5. O(log n): Logarithmic time (e.g., binary search).

### 🧩 Code Example
```javascript
// Big O Notation - Describes algorithm performance

// O(1) - Constant time
function getFirst(arr) {
  return arr[0]; // Always takes same time
}

// O(n) - Linear time
function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) { // Loops n times
    if (arr[i] === target) return i;
  }
}

// O(n²) - Quadratic time
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) { // Outer loop: n
    for (let j = 0; j < arr.length; j++) { // Inner loop: n
      // Total: n * n = n²
    }
  }
}

// O(log n) - Logarithmic time (Binary Search)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // Divides in half
    // Each iteration eliminates half the search space
  }
}

// Space Complexity Examples:

// O(1) - Constant space
function sum(arr) {
  let total = 0; // Only one variable
  for (let num of arr) {
    total += num;
  }
  return total;
}

// O(n) - Linear space
function copyArray(arr) {
  const copy = []; // New array of size n
  for (let item of arr) {
    copy.push(item);
  }
  return copy;
}

// Common Complexity Rankings (fastest to slowest):
// O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)
```

### Explanation
Big O notation is the standard way to measure how an algorithm's performance changes as the input size grows. `O(1)` means the time taken is constant, regardless of input size (e.g., accessing an array index). `O(n)` means time grows linearly with input (e.g., a loop). `O(n^2)` indicates quadratic growth, often seen in nested loops like Bubble Sort, which can be very slow for large inputs. `O(log n)` represents logarithmic growth, which is very efficient and typical of Binary Search. Understanding these complexities helps developers write code that scales well.
**باختصار بالعربي:** يقيس Big O كفاءة الخوارزمية؛ `O(1)` هو الأسرع، و `O(n^2)` بطيء مع البيانات الكبيرة.

### 📝 Notes
Understanding complexity helps in predicting algorithm performance and scalability.
Resources:
- Algorithm Complexity Guide
- Big O Cheat Sheet
