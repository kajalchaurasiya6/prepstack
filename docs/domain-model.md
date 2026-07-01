# PrepStack Domain Model

## User

### Purpose

Represents a registered user of PrepStack and stores authentication and profile information.

### Fields

id
username
email
passwordHash
avatarUrl
createdAt
updatedAt
lastLoginAt

### Relationships

User
├── Notes
├── Bookmarks
├── Progress
├── QuestionAttempts
├── MockInterviews
└── SavedSolutions

---

## Topic

### Purpose

Represents a learning category.

### Examples

React
JavaScript
TypeScript
HTML
CSS
Frontend System Design
DSA

### Fields

id
name
slug
description
icon
createdAt

### Relationships

Topic
└── Questions

---

## Question

### Purpose

Represents an interview question.

### Fields

id
title
description
questionType
difficulty
topicId
solution
hints
tags
createdAt
updatedAt

### Question Types

THEORY
CODING
MCQ

### Example

Explain React Reconciliation

### Relationships

Question
├── Notes
├── Bookmarks
├── Progress
├── QuestionAttempts
└── SavedSolutions

---

## QuestionAttempt

### Purpose

Stores every attempt made by a user for a question.

### Fields

QuestionAttempt

id
userId
questionId
submittedAnswer
score
isCorrect
feedback
strengths
improvements
evaluationMethod
attemptedAt

### Evaluation Methods

MOCK
AI
SYSTEM

### Relationships

QuestionAttempt
├── User
└── Question

---

## Note

### Purpose

Stores user notes for a question.

### Fields

id
userId
questionId
content
createdAt
updatedAt

### Relationships

Note
├── User
└── Question

---

## Bookmark

### Purpose

Stores saved questions.

### Fields

id
userId
questionId
createdAt

### Relationships

Bookmark
├── User
└── Question

---
## coding_questions

id
question_id
starter_code
language
created_at
updated_at

## Relationship:

Question (1)
      |
      |
      ---> (1) CodingQuestion


---

## SavedSolution

### Purpose

Stores user-written code solutions.

### Fields

id
userId
questionId
language
code
createdAt
updatedAt

### Relationships

SavedSolution
├── User
└── Question

---

## MockInterview

### Purpose

Represents a mock interview session.

### Fields

id
userId
topicId
difficulty
totalQuestions
score
startedAt
completedAt

### Relationships

MockInterview
├── User
├── Topic
└── MockInterviewQuestions

---

## TestCase Table
test_cases

id
coding_question_id
input
expected_output
is_hidden
created_at

## Relationship:

CodingQuestion (1)
          |
          |
          ---> (*) TestCase
## Example:

Input:
nums=[2,7,11,15]
target=9

Expected:
[0,1]
## MockInterviewQuestion

### Purpose

Stores questions used in a mock interview and their evaluation results.

### Fields

id
mockInterviewId
questionId
submittedAnswer
score
feedback

### Relationships

MockInterviewQuestion
├── MockInterview
└── Question


## ERD (Entity relationship Diagram)

User (1) ---------> (*) Note

User (1) ---------> (*) Bookmark

User (1) ---------> (*) Progress

User (1) ---------> (*) QuestionAttempt

User (1) ---------> (*) SavedSolution

User (1) ---------> (*) MockInterview

Topic (1) --------> (*) Question

Topic (1) --------> (*) MockInterview

Question (1) -----> (*) Note

Question (1) -----> (*) Bookmark

Question (1) -----> (*) Progress

Question (1) -----> (*) QuestionAttempt

Question (1) -----> (*) SavedSolution

Question (1) -----> (*) MockInterviewQuestion

MockInterview (1) -> (*) MockInterviewQuestion

