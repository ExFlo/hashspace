var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 


var personList =$set(exports, "personList", require("hsp/rt").template(["persons"], function(n){
  var _personDescription;try {_personDescription=personDescription} catch(e) {_personDescription=n.g('personDescription')};
  return [n.elt("div",0,{"class":"subtemplates"},0,[n.$foreach({e1:[1,1,"persons"]},"p_key","p",0,1,[n.cpt([_personDescription,"personDescription"],{e1:[1,1,"p"]},{"person":["",1]},0),n.$text(0,[" "]),n.$if({e1:[6,function(a0) {return !(a0);},2],e2:[1,1,"p_islast"]},1,[n.$text(0,[" "]),n.elt("hr",0,0,0),n.$text(0,[" "])])]),n.$text(0,[" "])])];
}));



var personDescription =$set(exports, "personDescription", require("hsp/rt").template(["person"], function(n){
  var _item;try {_item=item} catch(e) {_item=n.g('item')};
  return [n.elt("div",0,{"class":"person"},0,[n.cpt([_item,"item"],{e1:[1,2,"person","firstName"]},{"label":"First Name: ","value":["",1]},0),n.cpt([_item,"item"],{e1:[1,2,"person","lastName"]},{"label":"Last Name: ","value":["",1]},0)])];
}));



var item = require("hsp/rt").template(["label","value"], function(n){
  return [n.$if({e1:[1,1,"value"]},1,[n.elt("div",0,0,0,[n.elt("div",0,{"class":"label"},0,[n.$text({e1:[1,1,"label"]},["",1])]),n.elt("div",0,{"class":"value"},0,[n.$text({e1:[1,1,"value"]},["",1])])])])];
});


var persons=[
    {firstName:"Homer",lastName:"Simpsons"},
    {firstName:"Marge",lastName:"Simpsons"},
    {firstName:"Bart"},
    {firstName:"Lisa"},
    {firstName:"Maggy"}
]


// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: personList,
    data: [persons]
});