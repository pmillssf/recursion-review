// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json, type) {
  // result should equal an array,  object or nothing depending on what json[0] is
  var result;
  if (type === undefined){
    if (json[0] === '['){
      result = [];
    } else if (json[0] === '{'){
      result = {};
    }
  }
  // check if Number(json) !== NaN, in which case return Number(string),
  // if json === 'null', return null
  // if json === 'true', return true
  // if json === 'false', return false
  // if json[0] === '"', return a string with out the ""
  // if json is obj, .split(':')
    // count length of array to deterimine number of pairs
    // check for additional objects inside of the object, 
    // join indexes left of index and right of index
    //  run throuhn parseJSON
  // if json is an array, push parseJSON(json.slice(1,json.length-2));

  return result;
};
