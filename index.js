
function timeout(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(t), t);
  });
}

console.log(new Date());

/*
timeout(1000)
  .then(timeout(2000))
  .then((time) => {
    console.log(new Date(), "resolved", time);
  });
*/

// Read the commented code first before running it and answer the questions
// Q1: after how many seconds will "resolved" be logged?
// Q2: is that code correct (explain shortly why or why not)?
// E1: change the code to have *two* timeouts running sequentially,
//     leading to a 5 seconds interval. Ensure two non-zero values 
//     add up to 5 seconds (e.g. 2+3, 1+4 etc.)
//     Uncomment the above code to execute it.
