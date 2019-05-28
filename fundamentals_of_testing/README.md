**Table of Contents**

- [1. Throw an Error with a Simple Test in JavaScript](#1-throw-an-error-with-a-simple-test-in-javascript)
- [2. Abstract Test Assertions into a JavaScript Assertion Library](#2-abstract-test-assertions-into-a-javascript-assertion-library)
- [3. Encapsulate and Isolate Tests by building a JavaScript Testing Framework](#3-encapsulate-and-isolate-tests-by-building-a-javascript-testing-framework)
- [4. Support Async Tests with JavaScripts Promises through async await](#4-support-async-tests-with-javascripts-promises-through-async-await)
- [5. Provide Testing Helper Functions as Globals in JavaScript](#5-provide-testing-helper-functions-as-globals-in-javascript)
- [6. Verify Custom JavaScript Tests with Jest](#6-verify-custom-javascript-tests-with-jest)

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
