# Testing & Debugging

## Testing Fundamentals

### 📘 Overview
Learn the basics of software testing and why it matters. This section introduces the core concepts of verifying code correctness.

### 🧠 Step-by-step Breakdown
1. Understand unit testing using simple assertions.
2. Follow the Test-Driven Development (TDD) cycle: Red (fail), Green (pass), Refactor.
3. Write tests that fail first to define expected behavior.
4. Implement the code to make the tests pass.

### 🧩 Code Example
```javascript
// Simple unit test example
function add(a, b) {
  return a + b;
}

// Test the function
console.assert(add(2, 3) === 5, 'Add function works correctly');
console.assert(add(-1, 1) === 0, 'Add handles negative numbers');
console.assert(add(0, 0) === 0, 'Add handles zeros');

// Test-driven development approach:
// 1. Write a test that fails
// 2. Write code to make it pass
// 3. Refactor if needed
// 4. Repeat

// Example: Testing a function before writing it
function multiply(a, b) {
  // This will fail the test initially
  return 0;
}

// Write test first
if (multiply(3, 4) === 12) {
  console.log('✅ Test passed');
} else {
  console.log('❌ Test failed');
}
```

### Explanation
This example introduces the concept of unit testing using simple assertions. `console.assert` checks if a condition is true; if not, it logs an error message. The code also demonstrates Test-Driven Development (TDD), a methodology where you write the test *before* the code. In the `multiply` example, we first write a test that expects `multiply(3, 4)` to return `12`. Since the function initially returns `0`, the test fails (Red). We would then implement the logic to make it pass (Green). This process ensures that your code meets its requirements from the start.
**باختصار بالعربي:** يوضح هذا المثال أساسيات اختبار الوحدات ومنهجية التطوير القائم على الاختبار (TDD).

### 📝 Notes
Testing code behavior before implementation ensures reliability and reduces bugs.
Resources:
- Common Testing Mistakes
- Jest Documentation

---

## Jest Testing Framework

### 📘 Overview
Master Jest for unit testing in JavaScript and React applications. Jest is a powerful framework for writing and running tests.

### 🧠 Step-by-step Breakdown
1. Write test suites using `describe` to group related tests.
2. Define individual test cases with `test` and assertions with `expect`.
3. Use parameterized tests for multiple cases and async testing for promises.
4. Utilize mock functions to simulate behavior.

### 🧩 Code Example
```javascript
// Install Jest: npm install --save-dev jest

// math.test.js
const { add, subtract, multiply } = require('./math');

describe('Math functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplies 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  // Test with multiple cases
  test.each([
    [1, 1, 2],
    [2, 3, 5],
    [10, 20, 30],
  ])('adds %i + %i to equal %i', (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
  });
});

// Async testing
test('fetches user data', async () => {
  const user = await fetchUser(1);
  expect(user).toHaveProperty('id');
  expect(user.id).toBe(1);
});

// Mock functions
const mockFn = jest.fn();
mockFn('hello');
expect(mockFn).toHaveBeenCalledWith('hello');
```

### Explanation
Jest is a popular testing framework that provides structure and assertions. We use `describe` to group related tests into a "suite" (e.g., "Math functions"). Each `test` function describes a specific scenario. `expect(value).toBe(expected)` is an assertion that checks if the result matches our expectation. The example also shows how to test asynchronous code using `async/await` and how to use `jest.fn()` to create mock functions, which allow you to spy on function calls and control their behavior without invoking the actual implementation.
**باختصار بالعربي:** يوفر Jest هيكلاً منظماً للاختبارات مع أدوات للتأكيد، الاختبار غير المتزامن، والدوال الوهمية.

### 📝 Notes
Jest provides a comprehensive suite of tools for testing JavaScript applications effectively.
Resources:
- Jest Getting Started
- 30 Seconds of Code - Testing

---

## Testing React Components

### 📘 Overview
Learn how to test React components using testing libraries. This ensures your UI components render and behave as expected.

### 🧠 Step-by-step Breakdown
1. Render components in a test environment.
2. Query the DOM using `screen` to find elements.
3. Simulate user events like clicks and typing with `fireEvent`.
4. Assert that the document state matches expectations.

### 🧩 Code Example
```javascript
// Install: npm install --save-dev @testing-library/react @testing-library/jest-dom

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with disabled state', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
  });
});

// Testing user interactions
test('user can type in input field', () => {
  render(<InputComponent />);
  const input = screen.getByPlaceholderText('Enter name');
  
  fireEvent.change(input, { target: { value: 'John' } });
  
  expect(input.value).toBe('John');
});
```

### Explanation
Testing React components involves rendering them in a virtual DOM and interacting with them as a user would. We use `render` to display the component. `screen.getByText` helps us find elements based on their content. `fireEvent` simulates user actions like clicking a button or typing in an input field. We then verify the results using assertions like `toBeInTheDocument` or `toHaveBeenCalledTimes`. This ensures that the UI renders correctly and responds to user interactions as expected, without needing to run the app in a real browser.
**باختصار بالعربي:** نختبر مكونات React عن طريق محاكاة العرض وتفاعلات المستخدم للتأكد من صحة الواجهة.

### 📝 Notes
Testing React components involves verifying rendering, user interactions, and state updates.
Resources:
- Testing Library Docs
- Storybook Testing

---

## Debugging Techniques

### 📘 Overview
Master debugging tools and techniques for JavaScript applications. Effective debugging is crucial for identifying and fixing issues.

### 🧠 Step-by-step Breakdown
1. Use `console.log` and `console.table` for basic output inspection.
2. Set breakpoints in browser DevTools to pause execution.
3. Use the `debugger` statement to trigger breakpoints programmatically.
4. Implement error handling and performance profiling.

### 🧩 Code Example
```javascript
// Console debugging
console.log('Debug value:', variable);
console.table(arrayData);  // Display arrays as tables
console.group('Group name');
console.log('Inside group');
console.groupEnd();

// Breakpoints in browser DevTools
// Press F12, go to Sources tab, click line number to add breakpoint

// Debugger statement
function processData(data) {
  debugger;  // Execution pauses here in DevTools
  const result = data.map(item => item.value);
  return result;
}

// Error handling and logging
try {
  const result = riskyOperation();
  console.log('Success:', result);
} catch (error) {
  console.error('Error occurred:', error);
  console.error('Stack trace:', error.stack);
}

// Performance debugging
console.time('operation');
// Your code here
console.timeEnd('operation');  // Shows elapsed time

// Conditional logging
const DEBUG = true;
if (DEBUG) {
  console.log('Debug info:', data);
}

// React DevTools for component debugging
// Install React DevTools browser extension
// Inspect component props, state, and hooks
```

### Explanation
Effective debugging requires a mix of tools. `console.log` is the simplest way to inspect values. The `debugger` statement is more powerful; it pauses code execution in the browser's DevTools, allowing you to step through code line by line and inspect the current state. `try...catch` blocks are essential for handling runtime errors gracefully and logging stack traces. `console.time` helps measure how long an operation takes, which is useful for performance optimization. Finally, React DevTools is mentioned as a specialized tool for inspecting the component hierarchy and state.
**باختصار بالعربي:** مجموعة من تقنيات التشخيص تشمل السجلات، نقاط التوقف، معالجة الأخطاء، وقياس الأداء.

### 📝 Notes
A variety of debugging techniques, from console logs to advanced DevTools, helps in diagnosing issues efficiently.
Resources:
- Common Testing Mistakes
- Chrome DevTools Guide
