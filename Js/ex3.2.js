
  function bulkRun(functionsAndArgs) {

    const results = [];
  
    function executeNext() {
      if (functionsAndArgs.length === 0) {
        return Promise.resolve();
      }
  
      const [func, args] = functionsAndArgs.shift();
  
      return new Promise((resolve) => {
        func(...args, (data) => {
          results.push(data);
          executeNext().then(resolve);
        });
      });
    }
  
    return executeNext().then(results);
  }

const f1 = (cb) => {cb(1)}
const f2 = (a, cb) => {cb(a)}
const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}

bulkRun(
  [
    [f1, []],
    [f2, [2]],
    [f3, [3, 4]]
  ]
).then(console.log)
 // Output: [1, 2, [3, 4]]