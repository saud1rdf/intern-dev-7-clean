// src/app/docs/algorithms/data.ts

import { Topic } from '../types';

export const algorithmsTopics: Topic[] = [
  {
    id: 'algorithm-basics',
    title: 'Algorithm Fundamentals',
    titleAr: 'أساسيات الخوارزميات',
    description: 'Understand what algorithms are and how they solve problems',
    descriptionAr: 'فهم ما هي الخوارزميات وكيف تحل المشاكل',
    difficulty: 'beginner',
    estimatedTime: 45,
    codeExample: `// What is an algorithm?
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
// 5. Effectiveness: Each step is doable`,
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'GeeksforGeeks Algorithms', url: 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/' },
        { label: 'Programiz DSA', url: 'https://www.programiz.com/dsa/algorithm' },
      ],
    },
  },
  {
    id: 'sorting-algorithms',
    title: 'Sorting Algorithms',
    titleAr: 'خوارزميات الترتيب',
    description: 'Learn fundamental sorting algorithms: Bubble Sort, Quick Sort, and Merge Sort',
    descriptionAr: 'تعلم خوارزميات الترتيب الأساسية: Bubble Sort و Quick Sort و Merge Sort',
    difficulty: 'intermediate',
    estimatedTime: 75,
    codeExample: `// Bubble Sort - Simple but slow
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
console.log(mergeSort([64, 34, 25, 12, 22]));`,
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'JavaScript Algorithms', url: 'https://github.com/TheAlgorithms/JavaScript' },
        { label: 'Khan Academy Algorithms', url: 'https://www.khanacademy.org/computing/computer-science/algorithms' },
      ],
    },
  },
  {
    id: 'searching-algorithms',
    title: 'Searching Algorithms',
    titleAr: 'خوارزميات البحث',
    description: 'Master Linear Search and Binary Search algorithms',
    descriptionAr: 'إتقان خوارزميات البحث الخطي والثنائي',
    difficulty: 'intermediate',
    estimatedTime: 60,
    codeExample: `// Linear Search - Check each element
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
console.log(binarySearchRecursive(numbers, 7)); // Returns 3`,
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'Algorithm Fundamentals', url: 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/' },
        { label: 'JavaScript Algorithms Repo', url: 'https://github.com/TheAlgorithms/JavaScript' },
      ],
    },
  },
  {
    id: 'complexity-analysis',
    title: 'Time and Space Complexity',
    titleAr: 'تحليل التعقيد الزمني والمكاني',
    description: 'Learn Big O notation and how to analyze algorithm efficiency',
    descriptionAr: 'تعلم رموز Big O وكيفية تحليل كفاءة الخوارزميات',
    difficulty: 'intermediate',
    estimatedTime: 60,
    codeExample: `// Big O Notation - Describes algorithm performance

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
// O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)`,
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'Algorithm Complexity Guide', url: 'https://www.programiz.com/dsa/algorithm' },
        { label: 'Big O Cheat Sheet', url: 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/' },
      ],
    },
  },
];

