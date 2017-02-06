// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // set up a results array;
  var results = [];
  // define a new function searchNodes
  var searchNodes = function(node) {
    // check if the node passed into the function matches the given classname
    if (_.contains(node.classList, className)) {
      results.push(node);
    }
    // iterate through the child nodes of the node
    _.each(node.childNodes, function(node) {
      // run child node through search nodes
      searchNodes(node);
    });

  };

  //initialize the funcion by passing document.body
  searchNodes(document.body);
  //return the results array
  return results;

};
