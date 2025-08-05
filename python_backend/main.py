from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, List, Any

app = FastAPI()

# IMPORTANT: Update allow_origins to include your frontend's Render URL
# Replace 'https://your-frontend-name.onrender.com' with your actual frontend URL
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080", 
        "http://127.0.0.1:8080",
        "https://codecraft-7xpq.onrender.com/" # <--- Add your deployed frontend URL here
    ],
    allow_credentials=True,
    allow_methods=["*"], # Allows all methods (GET, POST, etc.)
    allow_headers=["*"], # Allows all headers
)

questions_data = {
    "Beginner": [
        {
            "id": 1,
            "title": "Sum of Two Numbers",
            "description": "Write a function that takes two numbers as input and returns their sum. The function should handle both integers and floating-point numbers.",
            "difficulty": "Beginner",
            "test_cases": [
                { "input": "2 3", "expected_output": "5" },
                { "input": "10 20", "expected_output": "30" },
                { "input": "-5 8", "expected_output": "3" },
                { "input": "0 0", "expected_output": "0" }
            ]
        },
        {
            "id": 2,
            "title": "Check Even or Odd",
            "description": "Write a function that determines if a given number is even or odd. Return 'even' for even numbers and 'odd' for odd numbers.",
            "difficulty": "Beginner",
            "test_cases": [
                { "input": "4", "expected_output": "even" },
                { "input": "7", "expected_output": "odd" },
                { "input": "0", "expected_output": "even" },
                { "input": "-3", "expected_output": "odd" }
            ]
        },
        {
            "id": 3,
            "title": "Find Maximum",
            "description": "Write a function that finds the maximum number from a list of three numbers.",
            "difficulty": "Beginner",
            "test_cases": [
                { "input": "5 2 8", "expected_output": "8" },
                { "input": "1 9 3", "expected_output": "9" },
                { "input": "-1 -5 -2", "expected_output": "-1" },
                { "input": "7 7 7", "expected_output": "7" }
            ]
        },
        {
            "id": 4,
            "title": "Calculate Average",
            "description": "Write a function that calculates the average of three numbers and returns it rounded to 2 decimal places.",
            "difficulty": "Beginner",
            "test_cases": [
                { "input": "10 20 30", "expected_output": "20.00" },
                { "input": "5 10 15", "expected_output": "10.00" },
                { "input": "1 2 3", "expected_output": "2.00" },
                { "input": "7 8 9", "expected_output": "8.00" }
            ]
        },
        {
            "id": 5,
            "title": "String Length",
            "description": "Write a function that returns the length of a given string.",
            "difficulty": "Beginner",
            "test_cases": [
                { "input": "hello", "expected_output": "5" },
                { "input": "programming", "expected_output": "11" },
                { "input": "", "expected_output": "0" },
                { "input": "a", "expected_output": "1" }
            ]
        },
        {
            "id": 6,
            "title": "Convert Temperature",
            "description": "Write a function that converts Celsius to Fahrenheit. Formula: F = (C * 9/5) + 32",
            "difficulty": "Beginner",
            "test_cases": [
                { "input": "0", "expected_output": "32" },
                { "input": "100", "expected_output": "212" },
                { "input": "25", "expected_output": "77" },
                { "input": "-10", "expected_output": "14" }
            ]
        },
        {
            "id": 7,
            "title": "Is Positive",
            "description": "Write a function that checks if a number is positive. Return 'positive' for positive numbers, 'negative' for negative, and 'zero' for zero.",
            "difficulty": "Beginner",
            "test_cases": [
                { "input": "5", "expected_output": "positive" },
                { "input": "-3", "expected_output": "negative" },
                { "input": "0", "expected_output": "zero" },
                { "input": "100", "expected_output": "positive" }
            ]
        },
        {
            "id": 8,
            "title": "Simple Interest",
            "description": "Calculate simple interest using the formula: SI = (P * R * T) / 100. Input format: principal rate time",
            "difficulty": "Beginner",
            "test_cases": [
                { "input": "1000 5 2", "expected_output": "100" },
                { "input": "5000 10 3", "expected_output": "1500" },
                { "input": "2000 7 1", "expected_output": "140" },
                { "input": "500 4 5", "expected_output": "100" }
            ]
        },
        {
            "id": 9,
            "title": "Area of Rectangle",
            "description": "Write a function that calculates the area of a rectangle given length and width.",
            "difficulty": "Beginner",
            "test_cases": [
                { "input": "5 3", "expected_output": "15" },
                { "input": "10 7", "expected_output": "70" },
                { "input": "4 4", "expected_output": "16" },
                { "input": "12 8", "expected_output": "96" }
            ]
        },
        {
            "id": 10,
            "title": "First Character",
            "description": "Write a function that returns the first character of a given string.",
            "difficulty": "Beginner",
            "test_cases": [
                { "input": "hello", "expected_output": "h" },
                { "input": "world", "expected_output": "w" },
                { "input": "a", "expected_output": "a" },
                { "input": "programming", "expected_output": "p" }
            ]
        }
    ],
    "Intermediate": [
        {
            "id": 11,
            "title": "Reverse String",
            "description": "Write a function that reverses a given string without using built-in reverse functions. Handle special characters and spaces properly.",
            "difficulty": "Intermediate",
            "test_cases": [
                { "input": "hello", "expected_output": "olleh" },
                { "input": "world 123", "expected_output": "321 dlrow" },
                { "input": "a", "expected_output": "a" },
                { "input": "", "expected_output": "" }
            ]
        },
        {
            "id": 12,
            "title": "Fibonacci Sequence",
            "description": "Write a function that returns the nth number in the Fibonacci sequence. The sequence starts with 0, 1, 1, 2, 3, 5, 8...",
            "difficulty": "Intermediate",
            "test_cases": [
                { "input": "0", "expected_output": "0" },
                { "input": "1", "expected_output": "1" },
                { "input": "5", "expected_output": "5" },
                { "input": "10", "expected_output": "55" }
            ]
        },
        {
            "id": 13,
            "title": "Count Vowels",
            "description": "Write a function that counts the number of vowels (a, e, i, o, u) in a given string. The function should be case-insensitive.",
            "difficulty": "Intermediate",
            "test_cases": [
                { "input": "hello", "expected_output": "2" },
                { "input": "PROGRAMMING", "expected_output": "3" },
                { "input": "xyz", "expected_output": "0" },
                { "input": "aeiou", "expected_output": "5" }
            ]
        },
        {
            "id": 14,
            "title": "Palindrome Check",
            "description": "Write a function that checks if a given string is a palindrome (reads the same forwards and backwards). Ignore spaces and case.",
            "difficulty": "Intermediate",
            "test_cases": [
                { "input": "racecar", "expected_output": "true" },
                { "input": "hello", "expected_output": "false" },
                { "input": "A man a plan a canal Panama", "expected_output": "true" },
                { "input": "race a car", "expected_output": "false" }
            ]
        },
        {
            "id": 15,
            "title": "Prime Number Check",
            "description": "Write a function that checks if a given number is prime. Return 'prime' if it is, 'not prime' otherwise.",
            "difficulty": "Intermediate",
            "test_cases": [
                { "input": "2", "expected_output": "prime" },
                { "input": "4", "expected_output": "not prime" },
                { "input": "17", "expected_output": "prime" },
                { "input": "1", "expected_output": "not prime" }
            ]
        },
        {
            "id": 16,
            "title": "Factorial",
            "description": "Write a function that calculates the factorial of a given number. 0! = 1, n! = n × (n-1)!",
            "difficulty": "Intermediate",
            "test_cases": [
                { "input": "0", "expected_output": "1" },
                { "input": "5", "expected_output": "120" },
                { "input": "3", "expected_output": "6" },
                { "input": "7", "expected_output": "5040" }
            ]
        },
        {
            "id": 17,
            "title": "GCD Calculator",
            "description": "Write a function that finds the Greatest Common Divisor (GCD) of two numbers using Euclidean algorithm.",
            "difficulty": "Intermediate",
            "test_cases": [
                { "input": "48 18", "expected_output": "6" },
                { "input": "56 98", "expected_output": "14" },
                { "input": "17 19", "expected_output": "1" },
                { "input": "100 25", "expected_output": "25" }
            ]
        },
        {
            "id": 18,
            "title": "Armstrong Number",
            "description": "Check if a number is an Armstrong number (sum of cubes of digits equals the number itself for 3-digit numbers).",
            "difficulty": "Intermediate",
            "test_cases": [
                { "input": "153", "expected_output": "true" },
                { "input": "371", "expected_output": "true" },
                { "input": "123", "expected_output": "false" },
                { "input": "407", "expected_output": "true" }
            ]
        },
        {
            "id": 19,
            "title": "Sum of Digits",
            "description": "Write a function that calculates the sum of all digits in a given number.",
            "difficulty": "Intermediate",
            "test_cases": [
                { "input": "123", "expected_output": "6" },
                { "input": "9876", "expected_output": "30" },
                { "input": "0", "expected_output": "0" },
                { "input": "555", "expected_output": "15" }
            ]
        },
        {
            "id": 20,
            "title": "Binary to Decimal",
            "description": "Write a function that converts a binary number (as string) to its decimal equivalent.",
            "difficulty": "Intermediate",
            "test_cases": [
                { "input": "1010", "expected_output": "10" },
                { "input": "1111", "expected_output": "15" },
                { "input": "1000", "expected_output": "8" },
                { "input": "101101", "expected_output": "45" }
            ]
        }
    ],
    "Advanced": [
        {
            "id": 21,
            "title": "Binary Search",
            "description": "Implement binary search algorithm to find the index of a target value in a sorted array. Return -1 if the target is not found.",
            "difficulty": "Advanced",
            "test_cases": [
                { "input": "1,3,5,7,9 5", "expected_output": "2" },
                { "input": "2,4,6,8,10 8", "expected_output": "3" },
                { "input": "1,2,3,4,5 6", "expected_output": "-1" },
                { "input": "10 10", "expected_output": "0" }
            ]
        },
        {
            "id": 22,
            "title": "Valid Parentheses",
            "description": "Write a function that determines if a string of parentheses '(', ')', '{', '}', '[', ']' is valid. A string is valid if brackets are properly matched and nested.",
            "difficulty": "Advanced",
            "test_cases": [
                { "input": "()", "expected_output": "true" },
                { "input": "()[]{}", "expected_output": "true" },
                { "input": "(]", "expected_output": "false" },
                { "input": "([)]", "expected_output": "false" }
            ]
        },
        {
            "id": 23,
            "title": "Longest Common Subsequence",
            "description": "Find the length of the longest common subsequence between two strings. A subsequence is derived by deleting some characters without changing the order of remaining characters.",
            "difficulty": "Advanced",
            "test_cases": [
                { "input": "abcde fghde", "expected_output": "2" },
                { "input": "abc def", "expected_output": "0" },
                { "input": "abc abc", "expected_output": "3" },
                { "input": "AGGTAB GXTXAYB", "expected_output": "4" }
            ]
        },
        {
            "id": 24,
            "title": "Quick Sort",
            "description": "Implement the quicksort algorithm to sort an array of integers in ascending order. Return the sorted array as space-separated string.",
            "difficulty": "Advanced",
            "test_cases": [
                { "input": "64,34,25,12,22,11,90", "expected_output": "11 12 22 25 34 64 90" },
                { "input": "5,2,8,1,9", "expected_output": "1 2 5 8 9" },
                { "input": "1", "expected_output": "1" },
                { "input": "3,1,4,1,5", "expected_output": "1 1 3 4 5" }
            ]
        },
        {
            "id": 25,
            "title": "Graph DFS",
            "description": "Implement Depth-First Search on a graph. Given adjacency list format 'node:neighbors', return DFS traversal starting from node 0.",
            "difficulty": "Advanced",
            "test_cases": [
                { "input": "0:1,2 1:0,3 2:0,4 3:1 4:2", "expected_output": "0 1 3 2 4" },
                { "input": "0:1 1:0,2 2:1", "expected_output": "0 1 2" },
                { "input": "0:1,2,3 1:0 2:0 3:0", "expected_output": "0 1 2 3" },
                { "input": "0:", "expected_output": "0" }
            ]
        },
        {
            "id": 26,
            "title": "Longest Increasing Subsequence",
            "description": "Find the length of the longest increasing subsequence in an array of integers.",
            "difficulty": "Advanced",
            "test_cases": [
                { "input": "10,9,2,5,3,7,101,18", "expected_output": "4" },
                { "input": "0,1,0,3,2,3", "expected_output": "4" },
                { "input": "7,7,7,7,7,7,7", "expected_output": "1" },
                { "input": "1,3,6,7,9,4,10,5,6", "expected_output": "6" }
            ]
        },
        {
            "id": 27,
            "title": "Merge Intervals",
            "description": "Given a collection of intervals, merge all overlapping intervals. Format: 'start1,end1 start2,end2' -> 'merged_start,merged_end'",
            "difficulty": "Advanced",
            "test_cases": [
                { "input": "1,3 2,6 8,10 15,18", "expected_output": "1,6 8,10 15,18" },
                { "input": "1,4 4,5", "expected_output": "1,5" },
                { "input": "1,4 0,4", "expected_output": "0,4" },
                { "input": "1,4 2,3", "expected_output": "1,4" }
            ]
        },
        {
            "id": 28,
            "title": "Edit Distance",
            "description": "Calculate the minimum edit distance (Levenshtein distance) between two strings using dynamic programming.",
            "difficulty": "Advanced",
            "test_cases": [
                { "input": "horse ros", "expected_output": "3" },
                { "input": "intention execution", "expected_output": "5" },
                { "input": "kitten sitting", "expected_output": "3" },
                { "input": "abc abc", "expected_output": "0" }
            ]
        },
        {
            "id": 29,
            "title": "N-Queens Problem",
            "description": "Find the number of solutions to the N-Queens problem for a given N (place N queens on NxN chessboard so none attack each other).",
            "difficulty": "Advanced",
            "test_cases": [
                { "input": "4", "expected_output": "2" },
                { "input": "1", "expected_output": "1" },
                { "input": "8", "expected_output": "92" },
                { "input": "2", "expected_output": "0" }
            ]
        },
        {
            "id": 30,
            "title": "Knapsack Problem",
            "description": "Solve 0/1 Knapsack problem. Given weights, values, and capacity, find maximum value. Format: 'weights values capacity'",
            "difficulty": "Advanced",
            "test_cases": [
                { "input": "10,20,30 60,100,120 50", "expected_output": "220" },
                { "input": "1,3,4,5 1,4,5,7 7", "expected_output": "9" },
                { "input": "2,3,4,5 3,4,5,6 5", "expected_output": "7" },
                { "input": "1,1,1 1,1,1 2", "expected_output": "2" }
            ]
        }
    ]
}

class GetQuestionsRequest(BaseModel):
    difficulty: str

@app.get("/")
def read_root():
    return {"message": "Hello from your new Python backend!"}

@app.post("/get-questions")
def get_questions(request_body: GetQuestionsRequest):
    difficulty = request_body.difficulty
    
    if difficulty in questions_data:
        return {"questions": questions_data[difficulty]}
    else:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid difficulty level: '{difficulty}'. Must be one of {list(questions_data.keys())}"
        )

