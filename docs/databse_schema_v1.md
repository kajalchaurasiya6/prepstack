## users

id               UUID            PRIMARY KEY
username         VARCHAR(255)    UNIQUE NOT NULL
email            VARCHAR(255)    UNIQUE NOT NULL
password_hash    VARCHAR(255)    NOT NULL
avatar_url       VARCHAR(255)    NULL
created_at       TIMESTAMP       NOT NULL
updated_at       TIMESTAMP       NOT NULL
last_login_at    TIMESTAMP       NULL



## topics

id            UUID            PRIMARY KEY
name          VARCHAR(255)    UNIQUE NOT NULL
slug          VARCHAR(255)    UNIQUE NOT NULL
description   TEXT            NULL
icon          VARCHAR(255)    NULL
created_at    TIMESTAMP       NOT NULL


## questions

id              UUID            PRIMARY KEY
title           VARCHAR(255)    NOT NULL
description     TEXT            NOT NULL
question_type   VARCHAR(50)     NOT NULL
difficulty      VARCHAR(50)     NOT NULL
solution        TEXT            NOT NULL
hints           TEXT            NULL
topic_id        UUID            NOT NULL
                REFERENCES topics(id)
created_at      TIMESTAMP       NOT NULL
updated_at      TIMESTAMP       NOT NULL


## question_attempts

id                  UUID            PRIMARY KEY

user_id             UUID            NOT NULL
                    REFERENCES users(id)

question_id         UUID            NOT NULL
                    REFERENCES questions(id)

submitted_answer    TEXT            NOT NULL

score               INTEGER         NULL

is_correct          BOOLEAN         NULL

feedback            TEXT            NULL

strengths           TEXT            NULL

improvements        TEXT            NULL

evaluation_method   VARCHAR(50)     NOT NULL

attempted_at        TIMESTAMP       NOT NULL

evaluation_method values

MOCK
AI
SYSTEM


## notes

id                  UUID            PRIMARY KEY

user_id             UUID            NOT NULL
                    REFERENCES users(id)

question_id         UUID            NOT NULL
                    REFERENCES questions(id)

content             TEXT            NOT NULL

created_at          TIMESTAMP       NOT NULL

updated_at          TIMESTAMP       NOT NULL

## bookmarks

id                  UUID            PRIMARY KEY

user_id             UUID            NOT NULL
                    REFERENCES users(id)

question_id         UUID            NOT NULL
                    REFERENCES questions(id)

created_at          TIMESTAMP       NOT NULL
Important Constraint
UNIQUE(user_id, question_id)



## saved_solutions

id                  UUID            PRIMARY KEY

user_id             UUID            NOT NULL
                    REFERENCES users(id)

question_id         UUID            NOT NULL
                    REFERENCES questions(id)

language            VARCHAR(50)     NOT NULL

code                TEXT            NOT NULL

created_at          TIMESTAMP       NOT NULL

updated_at          TIMESTAMP       NOT NULL

## mock_interviews

id                  UUID            PRIMARY KEY

user_id             UUID            NOT NULL
                    REFERENCES users(id)

topic_id            UUID            NOT NULL
                    REFERENCES topics(id)

difficulty          VARCHAR(50)     NOT NULL

total_questions     INTEGER         NOT NULL

score               INTEGER         NULL

started_at          TIMESTAMP       NOT NULL

completed_at        TIMESTAMP       NULL


## mock_interview_questions

id                  UUID            PRIMARY KEY

mock_interview_id   UUID            NOT NULL
                    REFERENCES mock_interviews(id)

question_id         UUID            NOT NULL
                    REFERENCES questions(id)

submitted_answer    TEXT            NULL

score               INTEGER         NULL

feedback            TEXT            NULL

is_correct          BOOLEAN         NULL

## Future Tables (V2)


## coding_questions

id
question_id
starter_code
language
created_at
updated_at


## test_cases
id
coding_question_id
input
expected_output
is_hidden
created_at