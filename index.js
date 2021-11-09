// Add your functions here
function map(obj, callBack) {
    const arr = []
    for (const key in obj) {
      arr.push(callBack(obj[key]))
    }
    return arr
  }
  
  function reduce(obj, callBack, accumulator) {
    const keys = Object.keys(obj)
    let i = 1
  
    if (accumulator) {
      i = 0
    } else {
      accumulator = obj[keys[0]]
      console.log(accumulator)
    }
  
    for (i; i < keys.length; i++) {
      accumulator = callBack(accumulator, obj[keys[i]])
    }
    return accumulator
  }

// what is the job of this function? is it supposed to return a string, modify an array?

// each function needs a single, clear purpose...............................................

// what data/info does it need in order to do it's job? what arguments, parameters is necessary?

// what am i expecting as a return value? Should be pretty distinct