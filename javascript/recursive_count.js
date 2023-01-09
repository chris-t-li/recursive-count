function recursiveCount(num = 0) {
  // this needs to count up from 0 to 9. stops at 9
  if (num > 9) {
    return
  } else {
    console.log(num)
    // it needs to call itself
    recursiveCount(num + 1)
  }
}

// recursiveCount()

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;


// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
