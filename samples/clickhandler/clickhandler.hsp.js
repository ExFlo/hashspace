var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var msg={text:""}, count=-1;


var message = require("hsp/rt").template(["msg"], function(n){
  var _changeMessage,_msg;try {_changeMessage=changeMessage} catch(e) {_changeMessage=n.g('changeMessage')};try {_msg=msg} catch(e) {_msg=n.g('msg')};
  var __s = {changeMessage : typeof changeMessage === 'undefined' ? undefined : changeMessage, msg : typeof msg === 'undefined' ? undefined : msg};
  return [__s,n.elt("div",{e1:[4,1,_changeMessage]},{"title":"click me!"},{"click":1,"selectstart":"return false"},[n.$if({e1:[9,"msg.isWarning"]},1,[n.elt("div",0,{"class":"warning"},0,[n.$text(0,["WARNING: "])])]),n.$text({e1:[1,2,"msg","text"]},["",1," "])])];
});


function changeMessage() {
    count++;
    switch(count%3) {
        case 0:
            $set(msg, "isWarning", false);
            $set(msg, "text", "Click me to discover hashspace event handlers");
            break;
        case 1:
            $set(msg, "text", "Well done - you called the event handler and updated the data model in a row!");
            break;
        case 2:
            $set(msg, "isWarning", true);
            $set(msg, "text", "If you click again you will be back to first step!");
            break;
    }
}

// set a first message value
changeMessage();

// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: message,
    data: [msg]
});