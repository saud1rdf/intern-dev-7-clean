// src/app/docs/testing-debugging/data.ts

import { Topic } from '../types';

export const testingDebuggingTopics: Topic[] = [
  {
    id: 'testing-basics',
    title: 'Testing Fundamentals',
    titleAr: 'أساسيات الاختبار',
    description: 'Learn the basics of software testing and why it matters',
    descriptionAr: 'تعلم أساسيات اختبار البرمجيات وأهميتها',
    difficulty: 'beginner',
    estimatedTime: 45,
    codeExample: `// Simple unit test example
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
}`,
    explanation: "This example introduces unit testing concepts using simple assertions. It demonstrates the Test-Driven Development (TDD) cycle: Red (write failing test) -> Green (write code to pass) -> Refactor. It emphasizes testing code behavior before implementation.",
    explanationAr: "يقدم هذا المثال مفاهيم اختبار الوحدات باستخدام تأكيدات بسيطة. يوضح دورة التطوير القائم على الاختبار (TDD): أحمر (كتابة اختبار فاشل) -> أخضر (كتابة كود للنجاح) -> إعادة هيكلة. يؤكد على اختبار سلوك الكود قبل التنفيذ.",
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'Common Testing Mistakes', url: 'https://kentcdodds.com/blog/common-testing-mistakes' },
        { label: 'Jest Documentation', url: 'https://jestjs.io/docs/getting-started' },
      ],
    },
  },
  {
    id: 'jest-testing',
    title: 'Jest Testing Framework',
    titleAr: 'إطار اختبار Jest',
    description: 'Master Jest for unit testing in JavaScript and React applications',
    descriptionAr: 'إتقان Jest لاختبار الوحدات في تطبيقات JavaScript و React',
    difficulty: 'intermediate',
    estimatedTime: 60,
    codeExample: `// Install Jest: npm install --save-dev jest

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
expect(mockFn).toHaveBeenCalledWith('hello');`,
    explanation: "This section introduces Jest, a popular JavaScript testing framework. It covers writing test suites with `describe`, test cases with `test`, and assertions with `expect`. It also touches on parameterized tests, async testing, and using mock functions.",
    explanationAr: "يقدم هذا القسم Jest، وهو إطار عمل شائع لاختبار JavaScript. يغطي كتابة مجموعات الاختبار باستخدام `describe`، حالات الاختبار باستخدام `test`، والتأكيدات باستخدام `expect`. كما يتطرق إلى الاختبارات ذات المعاملات، الاختبار غير المتزامن، واستخدام الدوال الوهمية (mock functions).",
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'Jest Getting Started', url: 'https://jestjs.io/docs/getting-started' },
        { label: '30 Seconds of Code - Testing', url: 'https://github.com/30-seconds/30-seconds-of-code' },
      ],
    },
  },
  {
    id: 'react-testing',
    title: 'Testing React Components',
    titleAr: 'اختبار مكونات React',
    description: 'Learn how to test React components using testing libraries',
    descriptionAr: 'تعلم كيفية اختبار مكونات React باستخدام مكتبات الاختبار',
    difficulty: 'intermediate',
    estimatedTime: 75,
    codeExample: `// Install: npm install --save-dev @testing-library/react @testing-library/jest-dom

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
});`,
    explanation: "This example shows how to test React components using React Testing Library. It demonstrates rendering components, querying the DOM with `screen`, simulating user events like clicks and typing with `fireEvent`, and asserting on the document state.",
    explanationAr: "يوضح هذا المثال كيفية اختبار مكونات React باستخدام React Testing Library. يظهر كيفية عرض المكونات، الاستعلام عن DOM باستخدام `screen`، محاكاة أحداث المستخدم مثل النقرات والكتابة باستخدام `fireEvent`، والتأكيد على حالة المستند.",
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'Testing Library Docs', url: 'https://testing-library.com/react' },
        { label: 'Storybook Testing', url: 'https://storybook.js.org/docs/react/writing-tests/introduction' },
      ],
    },
  },
  {
    id: 'debugging-techniques',
    title: 'Debugging Techniques',
    titleAr: 'تقنيات التشخيص',
    description: 'Master debugging tools and techniques for JavaScript applications',
    descriptionAr: 'إتقان أدوات وتقنيات التشخيص لتطبيقات JavaScript',
    difficulty: 'intermediate',
    estimatedTime: 60,
    codeExample: `// Console debugging
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
// Inspect component props, state, and hooks`,
    explanation: "This section provides a toolkit of debugging techniques: from basic `console.log` and `debugger` statements to using browser DevTools breakpoints and performance profiling. It also mentions React DevTools for component-specific debugging.",
    explanationAr: "يوفر هذا القسم مجموعة أدوات من تقنيات التشخيص: من `console.log` الأساسي وعبارات `debugger` إلى استخدام نقاط التوقف في أدوات المطور للمتصفح وتحليل الأداء. كما يشير إلى React DevTools للتشخيص الخاص بالمكونات.",
    resources: {
      title: 'Additional Resources',
      titleAr: 'موارد إضافية',
      links: [
        { label: 'Common Testing Mistakes', url: 'https://kentcdodds.com/blog/common-testing-mistakes' },
        { label: 'Chrome DevTools Guide', url: 'https://developer.chrome.com/docs/devtools' },
      ],
    },
  },
];







