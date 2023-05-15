### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  creating an async function and awaiting, working with the promise by chainging .thens
- What is a Promise?
  a promise of an awnser
- What are the differences between an async function and a regular function?
  a sync function will wait to finish 
- What is the difference between Node.js and Express.js?
  node is more versattile in what it can do whereas express is specific to backend servers
- What is the error-first callback pattern?
  passing the error in first folloed by whatever you want passed if its succesful
- What is middleware?
  callbakcs thats arent called by specific routes but are either called before any routes and used at all times or to be used after to perhaps handle errors
- What does the `next` function do?
  tells the scripts to move on
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  you can get all the promises at once instead of doing ti one by one
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
