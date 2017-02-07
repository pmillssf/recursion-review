// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // result should equal an array,  object or nothing depending on what json[0] is
  var result;
  if (json[0] === '[') {
    result = [];
  }
  if (json[0] === '{' && json[json.length - 1] === '}') {
    result = {};
    // remove original brackets, and break up object into an array of keys and values
    var objArray = json.slice(1, json.length - 1).split(':');
    console.log(objArray);
    for (var i = 0; i < objArray.length - 1; i++) {
      // Evens should be keys
      var key = parseJSON(objArray[i]);
      // odds should be values
      var value = parseJSON(objArray[i + 1]);
      result[key] = value;
    }
    return result;
  }
  if (json[0] === ' ') {
    return parseJSON(json.slice(1, json.length));
  }
  if (json === '\"\"') {
    return '';
  }
  if (json[0] === '"' && json !== '\"\"') {
    return json.slice(1, json.length - 1);
  }
  // if json === 'null', return null
  if (json === 'null') {
    return null;
  }
  // if json === 'true', return true
  if (json === 'true') {
    return true;
  }
  // if json === 'false', return false
  if (json === 'false') {
    return false;
  }
  // check if Number(json) !== NaN, in which case return Number(string),
  // if json[0] === '"', return a string with out the ""
  // if json is obj, .split(':')
    // count length of array to deterimine number of pairs
    // check for additional objects inside of the object, 
    // join indexes left of index and right of index
    //  run throuhn parseJSON
  // if json is an array, push parseJSON(json.slice(1,json.length-2));
  return result;
};
