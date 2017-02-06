// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // return JSONStringified number
  if (typeof obj === 'number') {
    return '' + obj;
  }
  // return JSONStringified null
  if (obj === null) {
    return '' + null;
  }
  // return JSONStringified boolean
  if (typeof obj === 'boolean') {
    return '' + obj;
  }
  // return JSONStringified string

  // return JSONStringified array
  // return JSONStringified object
};
