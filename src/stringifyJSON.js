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
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // return JSONStringified array
  if (Array.isArray(obj)) {
    var results = [];
    for (var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }
    return '[' + results.join(',') + ']';
  }
  // return JSONStringified object
  if (typeof obj === 'object') {
    var results = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof(obj[key]) === 'function') {
        continue;
      } else {
        results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + results.join(',') + '}';
  }
};
