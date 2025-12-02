# Data Structures

## Arrays and Lists

### 📘 Overview
Master arrays and linked lists - fundamental data structures. This section contrasts their memory usage and performance characteristics.

### 🧠 Step-by-step Breakdown
1. Arrays use contiguous memory, offering fast access (O(1)) but slow insertion/deletion (O(n)).
2. Linked Lists use nodes with pointers, offering fast insertion/deletion (O(1)) but slow access (O(n)).
3. Implement a Singly Linked List with methods for appending, retrieving, and printing elements.

### 🧩 Code Example
```javascript
// Arrays - Ordered collection of elements
const arr = [1, 2, 3, 4, 5];

// Access by index (O(1))
console.log(arr[0]); // 1

// Add/remove from end (O(1))
arr.push(6); // [1, 2, 3, 4, 5, 6]
arr.pop(); // [1, 2, 3, 4, 5]

// Add/remove from beginning (O(n))
arr.unshift(0); // [0, 1, 2, 3, 4, 5]
arr.shift(); // [1, 2, 3, 4, 5]

// Linked List Implementation
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add element at the end
  append(data) {
    const node = new Node(data);
    
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Get element at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    
    while (current) {
      if (count === index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // Print all elements
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); // 1, 2, 3
```

### 📝 Notes
Choosing between arrays and linked lists depends on the frequency of access versus insertion/deletion operations.
Resources:
- Data Structures Guide
- GeeksforGeeks Data Structures

---

## Stacks and Queues

### 📘 Overview
Learn stack (LIFO) and queue (FIFO) data structures. These structures define specific rules for adding and removing elements.

### 🧠 Step-by-step Breakdown
1. Stack follows Last In First Out (LIFO): `push` adds to top, `pop` removes from top.
2. Queue follows First In First Out (FIFO): `enqueue` adds to rear, `dequeue` removes from front.
3. Use a Stack to solve practical problems like checking for balanced parentheses.

### 🧩 Code Example
```javascript
// Stack - Last In First Out (LIFO)
class Stack {
  constructor() {
    this.items = [];
  }

  // Push element to top
  push(element) {
    this.items.push(element);
  }

  // Remove and return top element
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  // View top element without removing
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get stack size
  size() {
    return this.items.length;
  }
}

// Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // 30 (last in, first out)

// Queue - First In First Out (FIFO)
class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to rear
  enqueue(element) {
    this.items.push(element);
  }

  // Remove element from front
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  // View front element
  front() {
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get queue size
  size() {
    return this.items.length;
  }
}

// Usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10 (first in, first out)

// Practical use case: Balanced parentheses
function isBalanced(str) {
  const stack = new Stack();
  
  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.isEmpty()) return false;
      const top = stack.pop();
      if (
        (char === ')' && top !== '(') ||
        (char === ']' && top !== '[') ||
        (char === '}' && top !== '{')
      ) {
        return false;
      }
    }
  }
  
  return stack.isEmpty();
}

console.log(isBalanced('()[]{}')); // true
console.log(isBalanced('([)]')); // false
```

### 📝 Notes
Stacks and Queues are essential for managing data flow in algorithms and system processes.
Resources:
- JavaScript Algorithms
- freeCodeCamp Data Structures

---

## Trees and Binary Trees

### 📘 Overview
Understand tree data structures and binary search trees. Trees represent hierarchical data, while BSTs optimize searching.

### 🧠 Step-by-step Breakdown
1. A Binary Search Tree (BST) organizes nodes such that left child < parent < right child.
2. Implement methods for inserting values and searching for them.
3. Perform depth-first traversals: In-order (sorted), Pre-order, and Post-order.

### 🧩 Code Example
```javascript
// Binary Tree Node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value
  insert(value) {
    const newNode = new TreeNode(value);
    
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return this; // Value already exists
      }
    }
  }

  // Search for a value
  find(value) {
    if (!this.root) return false;
    
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true; // Found!
      }
    }
    return false;
  }

  // In-order traversal (Left, Root, Right)
  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  // Pre-order traversal (Root, Left, Right)
  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  // Post-order traversal (Left, Right, Root)
  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}

// Usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.find(7)); // true
console.log(bst.inOrder()); // [3, 5, 7, 10, 15]
console.log(bst.preOrder()); // [10, 5, 3, 7, 15]
```

### 📝 Notes
Trees are versatile structures used in databases, file systems, and more.
Resources:
- Programiz DSA
- JavaScript Algorithms

---

## Hash Tables and Maps

### 📘 Overview
Learn hash tables and how to implement key-value storage. Hash tables provide efficient data retrieval.

### 🧠 Step-by-step Breakdown
1. Use a hash function to map keys to indices in an array (buckets).
2. Handle collisions (when two keys map to the same index) using chaining.
3. Implement `set`, `get`, `remove`, and `has` methods.
4. Compare custom implementation with JavaScript's built-in `Map`.

### 🧩 Code Example
```javascript
// Hash Table Implementation
class HashTable {
  constructor(size = 10) {
    this.buckets = new Array(size);
    this.size = size;
  }

  // Simple hash function
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  // Set key-value pair
  set(key, value) {
    const index = this.hash(key);
    
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    
    // Check if key already exists
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // Update existing
        return;
      }
    }
    
    // Add new key-value pair
    bucket.push([key, value]);
  }

  // Get value by key
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    if (!bucket) return undefined;
    
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    
    return undefined;
  }

  // Remove key-value pair
  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    if (!bucket) return false;
    
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    
    return false;
  }

  // Check if key exists
  has(key) {
    return this.get(key) !== undefined;
  }
}

// Usage
const hashTable = new HashTable();
hashTable.set('name', 'John');
hashTable.set('age', 30);
hashTable.set('city', 'New York');

console.log(hashTable.get('name')); // 'John'
console.log(hashTable.has('age')); // true
hashTable.remove('city');
console.log(hashTable.get('city')); // undefined

// JavaScript built-in Map (similar concept)
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1')); // 'value1'
console.log(map.has('key2')); // true
map.delete('key2');
```

### 📝 Notes
Hash tables are fundamental for implementing associative arrays and database indexing.
Resources:
- Data Structures in JavaScript
- GeeksforGeeks Hash Tables
