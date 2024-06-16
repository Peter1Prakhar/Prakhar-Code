export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
	description?: string;
	isSolved?: boolean;
	Example1?: {
		Input: string;
		Output: string;
		Explanation: string;
	};
	Example2?: {
		Input: string;
		Output: string;
		Explanation: string;
	};
	Example3?: {
		Input: string;
		Output: string;
		Explanation: string;
	};
	Constraints?: string;
	boilerTemplate?:{
		CPP: string;
		Java: string;
		Javascript:string;
	}
};

export const problems: Problem[] = [
	{
		id: "two-sum",
		title: "Two Sum",
		difficulty: "Easy",
		category: "Array",
		order: 1,
		videoId: "8-k1C6ehKuw",
		description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
		isSolved: false,
		Example1: {
			Input: "nums = [2,7,11,15], target = 9",
			Output: "[0,1]",
			Explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
		},
		Example2: {
			Input: "nums = [3,2,4], target = 6",
			Output: "[1,2]",
			Explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
		},
		Example3: {
			Input: "nums = [3,3], target = 6",
			Output: "[0,1]",
			Explanation: "Because nums[0] + nums[1] == 6, we return [0, 1]."
		},
		Constraints: "2 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9, -10^9 <= target <= 10^9, Only one valid answer exists.",
		boilerTemplate: {
			CPP: `class Solution {
				public:
				  vector<int> twoSum(vector<int>& nums, int target) {
					// Your code here
				  }
			  };`,
			Java: `class Solution {
					<br>
				public int[] twoSum(int[] nums, int target) {
				<br>
					// Your code here
					<br>
				}
			}`,
			Javascript: `var twoSum = function(nums, target) {
				// Your code here
			};`
		}
			
	},
	{
		id: "reverse-linked-list",
		title: "Reverse Linked List",
		difficulty: "Hard",
		category: "Linked List",
		order: 2,
		videoId: "",
		description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
		isSolved: false,
		Example1: {
			Input: "head = [1,2,3,4,5]",
			Output: "[5,4,3,2,1]",
			Explanation: "After reversing the list, the input list is [5,4,3,2,1]."
		},
		Example2: {
			Input: "head = [1,2]",
			Output: "[2,1]",
			Explanation: "After reversing the list, the input list is [2,1]."
		},
		Example3: {
			Input: "head = []",
			Output: "[]",
			Explanation: "After reversing the list, the input list is []."
		},
		Constraints: "The number of nodes in the list is the range [0, 5000], -5000 <= Node.val <= 5000."
	},
	{
		id: "jump-game",
		title: "Jump Game",
		difficulty: "Medium",
		category: "Dynamic Programming",
		order: 3,
		videoId: "",
		description: "Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.",
		isSolved: false,
		Example1: {
			Input: "nums = [2,3,1,1,4]",
			Output: "true",
			Explanation: "Because you can reach the last index."
		},
		Example2: {
			Input: "nums = [3,2,1,0,4]",
			Output: "false",
			Explanation: "Because you will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index."
		},	
		Constraints: "1 <= nums.length <= 10^4, 0 <= nums[i] <= 10^5."
	},
	{
		id: "valid-parentheses",
		title: "Valid Parentheses",
		difficulty: "Easy",
		category: "Stack",
		order: 4,
		videoId: "xty7fr-k0TU",
		description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:",
		isSolved:false,
		Example1: {
			Input: "s = '()'",
			Output: "true",
			Explanation: "Because the input string is valid."
		},
		Example2: {
			Input: "s = '()[]{}'",
			Output: "true",
			Explanation: "Because the input string is valid."
		},
		Example3: {
			Input: "s = '(]'",
			Output: "false",
			Explanation: "Because the input string is not valid."
		},
		Constraints: "1 <= s.length <= 10^4, s consists of parentheses only '()[]{}'."
		
	},
	{
		id: "search-a-2d-matrix",
		title: "Search a 2D Matrix",
		difficulty: "Medium",
		category: "Binary Search",
		order: 5,
		videoId: "ZfFl4torNg4",
		description: "Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:",
		isSolved: false,
		Example1: {
			Input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
			Output: "true",
			Explanation: "Because the target 3 is in the matrix."
		},
		Example2: {
			Input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
			Output: "false",
			Explanation: "Because the target 13 is not in the matrix."
		},

		Constraints: "m == matrix.length, n == matrix[i].length, 1 <= m, n <= 100, -10^4 <= matrix[i][j], target <= 10^4."
	},
	{
		id: "container-with-most-water",
		title: "Container With Most Water",
		difficulty: "Medium",
		category: "Two Pointers",
		order: 6,
		videoId: "",
		description: "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
		isSolved: false,
		Example1: {
			Input: "height = [1,8,6,2,5,4,8,3,7]",
			Output: "49",
			Explanation: "Because the maximum area of the container is 49."
		},
		Example2: {
			Input: "height = [1,1]",
			Output: "1",
			Explanation: "Because the maximum area of the container is 1."
		},
		Example3: {
			Input: "height = [4,3,2,1,4]",
			Output: "16",
			Explanation: "Because the maximum area of the container is 16."
		},
		Constraints: "n == height.length, 2 <= n <= 10^5, 0 <= height[i] <= 10^4."
	},
	{
		id: "merge-intervals",
		title: "Merge Intervals",
		difficulty: "Medium",
		category: "intervals",
		order: 7,
		videoId: "",
		description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
		isSolved: false,
		Example1: {
			Input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
			Output: "[[1,6],[8,10],[15,18]]",
			Explanation: "Because the intervals [1,3] and [2,6] are overlapping, so merge them into [1,6]."
		},
		Example2: {
			Input: "intervals = [[1,4],[4,5]]",
			Output: "[[1,5]]",
			Explanation: "Because the intervals [1,4] and [4,5] are considered overlapping."
		},
		Constraints: "1 <= intervals.length <= 10^4, intervals[i].length == 2, 0 <= starti <= endi <= 10^4."
	},
	{
		id: "maximum-depth-of-binary-tree",
		title: "Maximum Depth of Binary Tree",
		difficulty: "Easy",
		category: "Tree",
		order: 8,
		videoId: "4qYTqOiRMoM",
		description: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
		isSolved: false,
		Example1: {
			Input: "root = [3,9,20,null,null,15,7]",
			Output: "3",
			Explanation: "Because the maximum depth is 3."
		},
		Example2: {
			Input: "root = [1,null,2]",
			Output: "2",
			Explanation: "Because the maximum depth is 2."
		},
		Constraints: "The number of nodes in the tree is in the range [0, 10^4], -100 <= Node.val <= 100."
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
		difficulty: "Easy",
		category: "Array",
		order: 9,
		videoId: "",
		description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
		isSolved: false,
		Example1: {
			Input: "prices = [7,1,5,3,6,4]",
			Output: "5",
			Explanation: "Because you can achieve a profit of 5."
		},
		Example2: {
			Input: "prices = [7,6,4,3,1]",
			Output: "0",
			Explanation: "Because you cannot achieve any profit."
		},
		Constraints: "1 <= prices.length <= 10^5, 0 <= prices[i] <= 10^4."

	},
	{
		id: "subsets",
		title: "Subsets",
		difficulty: "Medium",
		category: "Backtracking",
		order: 10,
		videoId: "",
		description: "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
		isSolved: false,
		Example1: {
			Input: "nums = [1,2,3]",
			Output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
			Explanation: "Because [1,2,3] is a possible subset."
		},
		Example2: {
			Input: "nums = [0]",
			Output: "[[],[0]]",
			Explanation: "Because [0] is a possible subset."
		},
		Constraints: "1 <= nums.length <= 10, -10 <= nums[i] <= 10, All the numbers of nums are unique."
	},
	{
		id: "valid-palindrome",
		title: "Valid Palindrome",
		difficulty: "Easy",
		category: "String",
		order: 11,
		videoId: "",
		description: "Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
		isSolved: false,
		Example1: {
			Input: "A man, a plan, a canal: Panama",
			Output: "true",
			Explanation: "Because 'A man, a plan, a canal: Panama' is a valid palindrome."
		},
		Example2: {
			Input: "race a car",
			Output: "false",
			Explanation: "Because 'race a car' is not a valid palindrome."
		},
		Constraints: "1 <= s.length <= 2 * 10^5, s consists only of printable ASCII characters."
	},
	{
		id: "longest-substring-without-repeating-characters",
		title: "Longest Substring Without Repeating Characters",
		difficulty: "Medium",
		category: "String",
		order: 12,
		videoId: "",
		description: "Given a string s, find the length of the longest substring without repeating characters.",
		isSolved: false,
		Example1: {
			Input: "abcabcbb",
			Output: "3",
			Explanation: "Because the longest substring without repeating characters is 'abc', which has a length of 3."
		},
		Example2: {
			Input: "bbbbb",
			Output: "1",
			Explanation: "Because the longest substring without repeating characters is 'b', which has a length of 1."
		},
		Constraints: "0 <= s.length <= 5 * 10^4, s consists of English letters, digits, symbols and spaces."
	},
	{
		id: "reverse-integer",
		title: "Reverse Integer",
		difficulty: "Easy",
		category: "Math",
		order: 13,
		videoId: "",
		description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
		isSolved: false,
		Example1: {
			Input: "123",
			Output: "321",
			Explanation: "Because the reversed integer of 123 is 321."
		},
		Example2: {
			Input: "-123",
			Output: "-321",
			Explanation: "Because the reversed integer of -123 is -321."
		},
		Constraints: "-2^31 <= x <= 2^31 - 1"
	},
	{
		id: "roman-to-integer",
		title: "Roman to Integer",
		difficulty: "Easy",
		category: "Math",
		order: 14,
		videoId: "",
		description: "Given a roman numeral, convert it to an integer.",
		isSolved: false,
		Example1: {
			Input: "III",
			Output: "3",
			Explanation: "Because the roman numeral III represents the integer 3."
		},
		Example2: {
			Input: "IV",
			Output: "4",
			Explanation: "Because the roman numeral IV represents the integer 4."
		},
		Constraints: "1 <= s.length <= 15, s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')."
	},
	{
		id: "valid-sudoku",
		title: "Valid Sudoku",
		difficulty: "Medium",
		category: "Array",
		order: 15,
		videoId: "",
		description: "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:",
		isSolved: false,
		Example1: {
			Input: "[['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]",
			Output: "true",
			Explanation: "Because the Sudoku board is valid."
		},
		Example2: {
			Input: "[['8','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]",
			Output: "false",
			Explanation: "Because the Sudoku board is not valid."
		},
		Constraints: "board.length == 9, board[i].length == 9, board[i][j] is a digit or '.'."
	},
	{
		id: "valid-anagram",
		title: "Valid Anagram",
		difficulty: "Easy",
		category: "String",
		order: 16,
		videoId: "",
		description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
		isSolved: false,
		Example1: {
			Input: "s = 'anagram', t = 'nagaram'",
			Output: "true",
			Explanation: "Because 'nagaram' is an anagram of 'anagram'."
		},
		Example2: {
			Input: "s = 'rat', t = 'car'",
			Output: "false",
			Explanation: "Because 'car' is not an anagram of 'rat'."
		},
		Constraints: "1 <= s.length, t.length <= 5 * 10^4, s and t consist of lowercase English letters."
	},
	{
		id: "merge-two-sorted-lists",
		title: "Merge Two Sorted Lists",
		difficulty: "Easy",
		category: "Linked List",
		order: 17,
		videoId: "",
		description: "Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.",
		isSolved: false,
		Example1: {
			Input: "l1 = [1,2,4], l2 = [1,3,4]",
			Output: "[1,1,2,3,4,4]",
			Explanation: "Because the merged sorted list is [1,1,2,3,4,4]."
		},
		Example2: {
			Input: "l1 = [], l2 = []",
			Output: "[]",
			Explanation: "Because the merged sorted list is []."
		},
		Constraints: "The number of nodes in both lists is in the range [0, 50], -100 <= Node.val <= 100, Both l1 and l2 are sorted in non-decreasing order."
	},
	{
		id: "valid-palindrome-ii",
		title: "Valid Palindrome II",
		difficulty: "Easy",
		category: "String",
		order: 18,
		videoId: "",
		description: "Given a string s, return true if the s can be palindrome after deleting at most one character from it.",
		isSolved: false,
		Example1: {
			Input: "s = 'aba'",
			Output: "true",
			Explanation: "Because 'aba' is a valid palindrome."
		},
		Example2: {
			Input: "s = 'abca'",
			Output: "true",
			Explanation: "Because 'abca' is a valid palindrome after deleting 'b'."
		},
		Constraints: "1 <= s.length <= 10^5, s consists of lowercase English letters."
	},
	{
		id: "minimum-depth-of-binary-tree",
		title: "Minimum Depth of Binary Tree",
		difficulty: "Easy",
		category: "Tree",
		order: 19,
		videoId: "",
		description: "Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.",
		isSolved: false,
		Example1: {
			Input: "root = [3,9,20,null,null,15,7]",
			Output: "2",
			Explanation: "Because the minimum depth is 2."
		},
		Example2: {
			Input: "root = [2,null,3,null,4,null,5,null,6]",
			Output: "5",
			Explanation: "Because the minimum depth is 5."
		},
		Constraints: "The number of nodes in the tree is in the range [0, 10^5], -1000 <= Node.val <= 1000."
	},
	{
		id: "valid-parentheses-ii",
		title: "Valid Parentheses II",
		difficulty: "Medium",
		category: "Stack",
		order: 20,
		videoId: "",
		description: "Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.",
		isSolved: false,
		Example1: {
			Input: "s = '(*))'",
			Output: "true",
			Explanation: "Because the string s is valid."
		},
		Example2: {
			Input: "s = '(*)))'",
			Output: "false",
			Explanation: "Because the string s is not valid."
		},
		Constraints: "1 <= s.length <= 100, s[i] is either '(', ')', or '*'."
	},
	{
		id: "maximum-subarray",
		title: "Maximum Subarray",
		difficulty: "Easy",
		category: "Array",
		order: 21,
		videoId: "",
		description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
		isSolved: false,
		Example1: {
			Input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
			Output: "6",
			Explanation: "Because the contiguous subarray [4,-1,2,1] has the largest sum of 6."
		},
		Example2: {
			Input: "nums = [1]",
			Output: "1",
			Explanation: "Because the contiguous subarray [1] has the largest sum of 1."
		},
		Constraints: "1 <= nums.length <= 3 * 10^4, -10^5 <= nums[i] <= 10^5."
	},
	{
		id: "word-search",
		title: "Word Search",
		difficulty: "Medium",
		category: "Backtracking",
		order: 22,
		videoId: "",
		description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
		isSolved: false,
		Example1: {
			Input: "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'ABCCED'",
			Output: "true",
			Explanation: "Because the word 'ABCCED' exists in the grid."
		},
		Example2: {
			Input: "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'SEE'",
			Output: "true",
			Explanation: "Because the word 'SEE' exists in the grid."
		},
		Constraints: "m == board.length, n = board[i].length, 1 <= m, n <= 6, 1 <= word.length <= 15, board and word consists of only uppercase and lowercase English letters."
	},
	{
		id: "count-and-say",
		title: "Count and Say",
		difficulty: "Easy",
		category: "String",
		order: 23,
		videoId: "",
		description: "The count-and-say sequence is a sequence of digit strings defined by the recursive formula: countAndSay(1) = '1', countAndSay(n) is the way you would 'say' the digit string from countAndSay(n-1), which is then converted into a different digit string. To determine how you 'say' a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.",
		isSolved: false,
		Example1: {
			Input: "n = 1",
			Output: "'1'",
			Explanation: "Because the count-and-say sequence starts with '1'."
		},
		Example2: {
			Input: "n = 4",
			Output: "'1211'",
			Explanation: "Because the count-and-say sequence is '1211'."
		},
		Constraints: "1 <= n <= 30."
	},
	{
		id: "merge-k-sorted-lists",
		title: "Merge k Sorted Lists",
		difficulty: "Hard",
		category: "Linked List",
		order: 24,
		videoId: "",
		description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
		isSolved: false,
		Example1: {
			Input: "lists = [[1,4,5],[1,3,4],[2,6]]",
			Output: "[1,1,2,3,4,4,5,6]",
			Explanation: "Because the merged sorted list is [1,1,2,3,4,4,5,6]."
		},
		Example2: {
			Input: "lists = []",
			Output: "[]",
			Explanation: "Because the merged sorted list is []."
		},
		Constraints: "k == lists.length, 0 <= k <= 10^4, 0 <= lists[i].length <= 500, -10^4 <= lists[i][j] <= 10^4, lists[i] is sorted in ascending order, and the sum of lists[i].length won't exceed 10^4."
	},
	{
		id: "group-anagrams",
		title: "Group Anagrams",
		difficulty: "Medium",
		category: "String",
		order: 25,
		videoId: "",
		description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
		isSolved: false,
		Example1: {
			Input: "strs = ['eat','tea','tan','ate','nat','bat']",
			Output: "[['bat'],['nat','tan'],['ate','eat','tea']]",
			Explanation: "Because the anagrams are grouped together."
		},
		Example2: {
			Input: "strs = ['']",
			Output: "[['']]",
			Explanation: "Because there is only one string, so it is grouped as [['']]."
		},
		Constraints: "1 <= strs.length <= 10^4, 0 <= strs[i].length <= 100, strs[i] consists of lowercase English letters."
	},
	{
		id: "letter-combinations-of-a-phone-number",
		title: "Letter Combinations of a Phone Number",
		difficulty: "Medium",
		category: "String",
		order: 26,
		videoId: "",
		description: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.",
		isSolved: false,
		Example1: {
			Input: "digits = '23'",
			Output: "['ad','ae','af','bd','be','bf','cd','ce','cf']",
			Explanation: "Because the letter combinations are ['ad','ae','af','bd','be','bf','cd','ce','cf']."
		},
		Example2: {
			Input: "digits = '2'",
			Output: "['a','b','c']",
			Explanation: "Because the letter combinations are ['a','b','c']."
		},
		Constraints: "0 <= digits.length <= 4, digits[i] is a digit from '2' to '9'."
	},
	{
		id: "implement-strstr",
		title: "Implement strStr()",
		difficulty: "Easy",
		category: "String",
		order: 27,
		videoId: "",
		description: "Implement strStr(). Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. Clarification: What should we return when needle is an empty string? This is a great question to ask during an interview. For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().",
		isSolved: false,
		Example1: {
			Input: "haystack = 'hello', needle = 'll'",
			Output: "2",
			Explanation: "Because the needle 'll' is found at index 2 in the haystack."
		},
		Example2: {
			Input: "haystack = 'aaaaa', needle = 'bba'",
			Output: "-1",
			Explanation: "Because the needle 'bba' is not found in the haystack."
		},
		Constraints: "0 <= haystack.length, needle.length <= 5 * 10^4, haystack and needle consist of only lower-case English characters."
	},
	{
		id: "permutations",
		title: "Permutations",
		difficulty: "Medium",
		category: "Backtracking",
		order: 28,
		videoId: "",
		description: "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
		isSolved: false,
		Example1: {
			Input: "nums = [1,2,3]",
			Output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
			Explanation: "Because the possible permutations are [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]."
		},
		Example2: {
			Input: "nums = [0,1]",
			Output: "[[0,1],[1,0]]",
			Explanation: "Because the possible permutations are [[0,1],[1,0]]."
		},
		Constraints: "1 <= nums.length <= 6, -10 <= nums[i] <= 10, All the integers of nums are unique."
	},
	{
		id: "rotate-image",
		title: "Rotate Image",
		difficulty: "Medium",
		category: "Array",
		order: 29,
		videoId: "",
		description: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.",
		isSolved: false,
		Example1: {
			Input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
			Output: "[[7,4,1],[8,5,2],[9,6,3]]",
			Explanation: "Because the image is rotated by 90 degrees clockwise."
		},
		Example2: {
			Input: "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
			Output: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
			Explanation: "Because the image is rotated by 90 degrees clockwise."
		},
		Constraints: "matrix.length == n, matrix[i].length == n, 1 <= n <= 20, -1000 <= matrix[i][j] <= 1000."
	},
	{
		id: "valid-sudoku-ii",
		title: "Valid Sudoku II",
		difficulty: "Medium",
		category: "Array",
		order: 30,
		videoId: "",
		description: "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules: Each row must contain the digits 1-9 without repetition. Each column must contain the digits 1-9 without repetition. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.",
		isSolved: false,
		Example1: {
			Input: "[['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]",
			Output: "true",
			Explanation: "Because the Sudoku board is valid."
		},
		Example2: {
			Input: "[['8','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]",
			Output: "false",
			Explanation: "Because the Sudoku board is not valid."
		},
		Constraints: "board.length == 9, board[i].length == 9, board[i][j] is a digit or '.'."
	}
];