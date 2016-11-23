module.exports = function(o) { // clones an object (only lvl 1, see hardClone)
  var e = new Error(o.message);
  e.code = o.code;
  for(var k in o) if(o.hasOwnProperty(k)){
    e[k] = o[k];
  }
  return e;
};
