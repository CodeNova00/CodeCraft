export interface Question {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  test_cases: Array<{
    input: string;
    expected_output: string;
  }>;
}

export const questionsData = {
  Beginner: [
    {
      id: 1,
      title: "Sum of Two Numbers",
      description: "Write a function that takes two numbers as input and returns their sum. The function should handle both integers and floating-point numbers.",
      difficulty: "Beginner",
      test_cases: [
        { input: "2 3", expected_output: "5" },
        { input: "10 20", expected_output: "30" },
        { input: "-5 8", expected_output: "3" },
        { input: "0 0", expected_output: "0" }
      ]
    },
    {
      id: 2,
      title: "Check Even or Odd",
      description: "Write a function that determines if a given number is even or odd. Return 'even' for even numbers and 'odd' for odd numbers.",
      difficulty: "Beginner",
      test_cases: [
        { input: "4", expected_output: "even" },
        { input: "7", expected_output: "odd" },
        { input: "0", expected_output: "even" },
        { input: "-3", expected_output: "odd" }
      ]
    },
    {
      id: 3,
      title: "Find Maximum",
      description: "Write a function that finds the maximum number from a list of three numbers.",
      difficulty: "Beginner",
      test_cases: [
        { input: "5 2 8", expected_output: "8" },
        { input: "1 9 3", expected_output: "9" },
        { input: "-1 -5 -2", expected_output: "-1" },
        { input: "7 7 7", expected_output: "7" }
      ]
    }
  ],
  
  Intermediate: [
    {
      id: 4,
      title: "Reverse String",
      description: "Write a function that reverses a given string without using built-in reverse functions. Handle special characters and spaces properly.",
      difficulty: "Intermediate",
      test_cases: [
        { input: "hello", expected_output: "olleh" },
        { input: "world 123", expected_output: "321 dlrow" },
        { input: "a", expected_output: "a" },
        { input: "", expected_output: "" }
      ]
    },
    {
      id: 5,
      title: "Fibonacci Sequence",
      description: "Write a function that returns the nth number in the Fibonacci sequence. The sequence starts with 0, 1, 1, 2, 3, 5, 8...",
      difficulty: "Intermediate",
      test_cases: [
        { input: "0", expected_output: "0" },
        { input: "1", expected_output: "1" },
        { input: "5", expected_output: "5" },
        { input: "10", expected_output: "55" }
      ]
    },
    {
      id: 6,
      title: "Count Vowels",
      description: "Write a function that counts the number of vowels (a, e, i, o, u) in a given string. The function should be case-insensitive.",
      difficulty: "Intermediate",
      test_cases: [
        { input: "hello", expected_output: "2" },
        { input: "PROGRAMMING", expected_output: "3" },
        { input: "xyz", expected_output: "0" },
        { input: "aeiou", expected_output: "5" }
      ]
    }
  ],
  
  Advanced: [
    {
      id: 7,
      title: "Binary Search",
      description: "Implement binary search algorithm to find the index of a target value in a sorted array. Return -1 if the target is not found.",
      difficulty: "Advanced",
      test_cases: [
        { input: "1,3,5,7,9 5", expected_output: "2" },
        { input: "2,4,6,8,10 8", expected_output: "3" },
        { input: "1,2,3,4,5 6", expected_output: "-1" },
        { input: "10 10", expected_output: "0" }
      ]
    },
    {
      id: 8,
      title: "Valid Parentheses",
      description: "Write a function that determines if a string of parentheses '(', ')', '{', '}', '[', ']' is valid. A string is valid if brackets are properly matched and nested.",
      difficulty: "Advanced",
      test_cases: [
        { input: "()", expected_output: "true" },
        { input: "()[]{}", expected_output: "true" },
        { input: "(]", expected_output: "false" },
        { input: "([)]", expected_output: "false" }
      ]
    },
    {
      id: 9,
      title: "Longest Common Subsequence",
      description: "Find the length of the longest common subsequence between two strings. A subsequence is derived by deleting some characters without changing the order of remaining characters.",
      difficulty: "Advanced",
      test_cases: [
        { input: "abcde fghde", expected_output: "2" },
        { input: "abc def", expected_output: "0" },
        { input: "abc abc", expected_output: "3" },
        { input: "AGGTAB GXTXAYB", expected_output: "4" }
      ]
    }
  ]
};