/* A REPL (Read-Eval-Print Loop) in JavaScript is an interactive programming environment that takes
 in a single user input, executes it, and returns the result to the user.
  Node.js comes with a built-in REPL, which allows you to interactively write and execute JavaScript code.

Here's how you can use it: */

// 1. Using Node.js REPL:
 //we can access the REPL simply by typing `node` in your terminal or command prompt:

```bash
$ node
``` 

//Once inside the REPL, you can enter any JavaScript code, and it will be evaluated immediately. For example:

```js
> 1 + 2
3

> let a = 10;
undefined

> a * 2
20
```

// 2. Simple REPL from Scratch in the Browser:
//You can also create a simple REPL-like environment in the browser using the `eval()` function in JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript REPL</title>
</head>
<body>
  <h1>Simple JavaScript REPL</h1>
  <textarea id="code" rows="5" cols="50" placeholder="Enter JavaScript code here..."></textarea>
  <br />
  <button onclick="runCode()">Run Code</button>
  <p>Output:</p>
  <pre id="output"></pre>

  <script>
    function runCode() {
      const code = document.getElementById('code').value;
      let output;
      try {
        output = eval(code);  // Executes the JavaScript code
      } catch (error) {
        output = 'Error: ' + error.message;
      }
      document.getElementById('output').textContent = output;
    }
  </script>
</body>
</html>
```

//paste this code into an HTML file and open it in the browser to try out a basic JavaScript REPL. 

