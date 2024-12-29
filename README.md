# Unhandled Network Request Error in React Native

This example demonstrates a common error in React Native applications where network requests fail without proper error handling. The application may crash or display nothing, leaving the user confused.  The solution demonstrates how to implement robust error handling to provide a better user experience.

## Bug
The `bug.js` file shows a React component that fetches data from a URL.  If the network request fails (due to network issues, server errors, etc.), the app crashes or displays nothing.  The error is not caught and the user receives no feedback.

## Solution
The `bugSolution.js` file shows the improved component with proper error handling. It includes:

*   A loading state to indicate to the user that the data is being fetched.
*   An error state to display an error message if the network request fails.
*   Clear and informative error messages to the user.

This approach ensures a better user experience by handling potential errors gracefully and providing informative feedback.