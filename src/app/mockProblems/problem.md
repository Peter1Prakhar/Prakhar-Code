# Two Sum

### Problem Description

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

### Examples

**Example 1:**

Input: `nums = [2,7,11,15], target = 9`
Output: `[0,1]`
Explanation: Because `nums[0] + nums[1]` equals `9`, we return `[0, 1]`.

**Example 2:**

Input: `nums = [3,2,4], target = 6`
Output: `[1,2]`
Explanation: Because `nums[1] + nums[2]` equals `6`, we return `[1, 2]`.

**Example 3:**

Input: `nums = [3,3], target = 6`
Output: `[0,1]`
Explanation: Because `nums[0] + nums[1]` equals `6`, we return `[0, 1]`.

### Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.
### Problem Description

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

### Examples

**Example 1:**

Input: `nums = [2,7,11,15], target = 9`
Output: `[0,1]`
Explanation: Because `nums[0] + nums[1]` equals `9`, we return `[0, 1]`.

**Example 2:**

Input: `nums = [3,2,4], target = 6`
Output: `[1,2]`
Explanation: Because `nums[1] + nums[2]` equals `6`, we return `[1, 2]`.

**Example 3:**

Input: `nums = [3,3], target = 6`
Output: `[0,1]`
Explanation: Because `nums[0] + nums[1]` equals `6`, we return `[0, 1]`.

### Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

To export the markdown and use it in a React component, you can follow these steps:

1. Create a new React component file, let's say `ProblemComponent.js`.
2. Import the necessary React components and libraries:
    ```jsx
    import React from 'react';
    import ReactMarkdown from 'react-markdown';
    ```
3. Import the markdown file:
    ```jsx
    import problemMarkdown from './mockProblems/problem.md';
    ```
4. Create a functional component called `ProblemComponent`:
    ```jsx
    const ProblemComponent = () => {
      return (
         <div>
            <ReactMarkdown>{problemMarkdown}</ReactMarkdown>
         </div>
      );
    };
    ```
5. Export the `ProblemComponent`:
    ```jsx
    export default ProblemComponent;
    ```
6. In your main React component, import and render the `ProblemComponent`:
    ```jsx
    import React from 'react';
    import ProblemComponent from './ProblemComponent';

    const App = () => {
      return (
         <div>
            <h1>My App</h1>
            <ProblemComponent />
         </div>
      );
    };

    export default App;
    ```
7. Finally, render the `App` component in your root file, such as `index.js`:
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    ReactDOM.render(<App />, document.getElementById('root'));
    ```

This way, the markdown content from `problem.md` will be rendered as HTML in the `ProblemComponent` and displayed in your React application.
