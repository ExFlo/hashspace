var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var inputSample = require("hsp/rt").template(["data"], function(n){
  return [n.elt("div",0,{"class":"info2"},0,[n.$text(0,["All the following inputs are synchronized:"])]),n.elt("div",0,{"class":"section"},0,[n.$text(0,["Comment #1: "]),n.elt("input",{e1:[1,2,"data","comment"]},{"type":"text","value":["",1]},0),n.elt("br",0,0,0),n.$text(0,["Comment #2: "]),n.elt("input",{e1:[1,2,"data","comment"]},{"type":"text","model":["",1]},0),n.elt("br",0,0,0),n.$text(0,["Comment #3: "]),n.elt("span",0,{"class":"textValue"},0,[n.$text({e1:[1,2,"data","comment"]},["",1])])]),n.elt("div",0,{"class":"section"},0,[n.elt("input",{e1:[1,2,"data","isChecked"]},{"id":"cb1","type":"checkbox","value":["",1]},0),n.elt("label",0,{"for":"cb1"},0,[n.$text(0,["Check me!"])]),n.$text(0,[" -  "]),n.elt("input",{e1:[1,2,"data","isChecked"]},{"id":"cb2","type":"checkbox","model":["",1]},0),n.elt("label",0,{"for":"cb2"},0,[n.$text(0,["Check me (2)!"])]),n.$text(0,[" - Checked: "]),n.elt("span",0,{"class":"textValue"},0,[n.$text({e1:[1,2,"data","isChecked"]},["",1])])]),n.elt("div",0,{"class":"section"},0,[n.elt("input",{e1:[1,2,"data","selection"]},{"id":"rb1","type":"radio","model":["",1],"value":"A"},0),n.elt("label",0,{"for":"rb1"},0,[n.$text(0,["Select A"])]),n.$text(0,[" -  "]),n.elt("input",{e1:[1,2,"data","selection"]},{"id":"rb2","type":"radio","model":["",1],"value":"B"},0),n.elt("label",0,{"for":"rb2"},0,[n.$text(0,["Select B"])]),n.$text(0,[" -  "]),n.elt("input",{e1:[1,2,"data","selection"]},{"id":"rb3","type":"radio","model":["",1],"value":"C"},0),n.elt("label",0,{"for":"rb3"},0,[n.$text(0,["Select C"])]),n.$text(0,[" - Selection in model:"]),n.elt("span",0,{"class":"textValue"},0,[n.$text({e1:[1,2,"data","selection"]},["",1])])]),n.elt("div",0,{"class":"section"},0,[n.$text(0,["Input with dynamic type: "]),n.elt("input",{e1:[1,2,"data","dtype"],e2:[1,2,"data","comment"]},{"type":["",1],"value":["",2],"style":"width:100px"},0),n.$text(0,[" - change type: "]),n.elt("input",{e1:[1,2,"data","dtype"]},{"type":"text","value":["",1],"style":"width:100px"},0)])];
});


var d={comment:"edit me!", isChecked:false, selection:"B", dtype:"text"}

// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: inputSample,
    data: [d]
});