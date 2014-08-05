var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var test = require("hsp/rt").template(["m"], function(n){
  var _updateModel;try {_updateModel=updateModel} catch(e) {_updateModel=n.g('updateModel')};
  return [n.let({e1:[1,2,"m","part1"],e2:[6,function(a0) {return (a0 + "!");},3],e3:[1,4,"m","part2","part21","msg"]},['p1',1,'m21',2]),n.elt("div",0,0,0,[n.let({e1:[1,2,"p1","part11"]},['p11',1]),n.$text(0,["Part 1.1: "]),n.elt("span",0,{"class":"textValue"},0,[n.$text({e1:[1,2,"p11","msg"]},["",1])]),n.elt("br",0,0,0)],1),n.elt("div",0,0,0,[n.$text(0,["Part 2.1: "]),n.elt("span",0,{"class":"textValue"},0,[n.$text({e1:[1,1,"m21"]},["",1])]),n.$text(0,[" - "]),n.$if({e1:[6,function(a0) {return !(a0);},2],e2:[1,1,"p11"]},1,[n.$text(0,["p11 is of course not visible in the 2nd element scope "])])]),n.elt("a",{e1:[4,1,_updateModel]},0,{"click":1},[n.$text(0,["Change Model"])])];
});


var model={
  part1:{
    part11: {msg: "Message 1.1"}
  },
  part2:{
    part21: {msg: "Message 2.1"}
  }
};

var count=0;
function updateModel() {
  count++;
  $set(model.part1.part11, "msg", "(1.1 update: "+count+")");
  $set(model.part2.part21, "msg", "(2.1 update: "+count+")");
}

// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: test,
    data: [model]
});