import { Problem } from '../types/problem';

export const problems: Problem[] = [
  {
    id: '1',
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]'
      }
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
      'Only one valid answer exists.'
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
    // Write your code here
};`,
      typescript: `function twoSum(nums: number[], target: number): number[] {
    // Write your code here
};`,
      python: `def twoSum(nums: List[int], target: int) -> List[int]:
    # Write your code here`
    },
    testCases: [
      {
        input: ['[2,7,11,15]', '9'],
        output: '[0,1]'
      },
      {
        input: ['[3,2,4]', '6'],
        output: '[1,2]'
      }
    ]
  },
  {
    id: '2',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order.',
    examples: [
      {
        input: 's = "()"',
        output: 'true'
      },
      {
        input: 's = "()[]{}"',
        output: 'true'
      },
      {
        input: 's = "(]"',
        output: 'false'
      }
    ],
    constraints: [
      '1 <= s.length <= 104',
      's consists of parentheses only \'()[]{}\''
    ],
    starterCode: {
      javascript: `function isValid(s) {
    // Write your code here
};`,
      typescript: `function isValid(s: string): boolean {
    // Write your code here
};`,
      python: `def isValid(s: str) -> bool:
    # Write your code here`
    },
    testCases: [
      {
        input: ['()'],
        output: 'true'
      },
      {
        input: ['()[]{}'],
        output: 'true'
      },
      {
        input: ['(]'],
        output: 'false'
      }
    ]
  },
  {
    id: '3',
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    description: 'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.',
    examples: [
      {
        input: 'list1 = [1,2,4], list2 = [1,3,4]',
        output: '[1,1,2,3,4,4]',
        explanation: 'The lists are merged to form a sorted list.'
      }
    ],
    constraints: [
      'The number of nodes in both lists is in the range [0, 50]',
      '-100 <= Node.val <= 100',
      'Both list1 and list2 are sorted in non-decreasing order'
    ],
    starterCode: {
      javascript: `function mergeTwoLists(list1, list2) {
    // Write your code here
};`,
      typescript: `function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // Write your code here
};`,
      python: `def mergeTwoLists(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    # Write your code here`
    },
    testCases: [
      {
        input: ['[1,2,4]', '[1,3,4]'],
        output: '[1,1,2,3,4,4]'
      },
      {
        input: ['[]', '[]'],
        output: '[]'
      }
    ]
  },
  {
    id: '4',
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    description: 'Given an integer array nums, find the subarray with the largest sum, and return its sum.',
    examples: [
      {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: 'The subarray [4,-1,2,1] has the largest sum 6.'
      }
    ],
    constraints: [
      '1 <= nums.length <= 105',
      '-104 <= nums[i] <= 104'
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {
    // Write your code here
};`,
      typescript: `function maxSubArray(nums: number[]): number {
    // Write your code here
};`,
      python: `def maxSubArray(nums: List[int]) -> int:
    # Write your code here`
    },
    testCases: [
      {
        input: ['[-2,1,-3,4,-1,2,1,-5,4]'],
        output: '6'
      },
      {
        input: ['[1]'],
        output: '1'
      }
    ]
  },
  {
    id: '5',
    title: 'Merge k Sorted Lists',
    difficulty: 'Hard',
    description: 'You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.',
    examples: [
      {
        input: 'lists = [[1,4,5],[1,3,4],[2,6]]',
        output: '[1,1,2,3,4,4,5,6]',
        explanation: 'The linked-lists are merged into a sorted list.'
      }
    ],
    constraints: [
      'k == lists.length',
      '0 <= k <= 104',
      '0 <= lists[i].length <= 500',
      '-104 <= lists[i][j] <= 104',
      'lists[i] is sorted in ascending order'
    ],
    starterCode: {
      javascript: `function mergeKLists(lists) {
    // Write your code here
};`,
      typescript: `function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // Write your code here
};`,
      python: `def mergeKLists(lists: List[Optional[ListNode]]) -> Optional[ListNode]:
    # Write your code here`
    },
    testCases: [
      {
        input: ['[[1,4,5],[1,3,4],[2,6]]'],
        output: '[1,1,2,3,4,4,5,6]'
      },
      {
        input: ['[]'],
        output: '[]'
      }
    ]
  }
];