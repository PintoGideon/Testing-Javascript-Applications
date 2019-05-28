
# 1. Throw an error with a Simple Test in Javascropt

An automated test is code that throws an error when things are unexpected.
The job of a testing framework is to make sure the test is as useful as possible so we can quickly remedy our errors.

# 2. Abstract Test Assertions into a Javascript Assertion Library

An assertion library can be as simple as a function which takes a result and
returns an object containing a number of different assertions which allows
the user to determine how they want to evaluate that result against an
expected value.

# 3. Encapsulate and isolate Tests by building a JavaScript Testing Framework

Our naive implementation works, but prevents subsequent errors from being
thrown. Additionally, the stack trace indicates the issue is at the location
where the error was thrown. A better solution would be to allow tests to
continue running beyond the failed ones, and indicates which test is
revealing and issue.

This can be fixed by creating a function which takes a title, allowing us to
name tests, and a callback function which will be responsible for running
the actual tests, and making use of a try-catch block so as to prevent
thrown errors from stopping further execution.

# Support Async tests with Javascripts Promises through async await

In order to allow async tests to be run, we need our `test` function to be
`async`, and we need to prepend the callack invocation with `await`.
