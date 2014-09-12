var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
require('hsp/gestures/index').register();


var gestures = require("hsp/rt").template(["msgList"], function(n){
  var _addMsg,_clearMsg,_msgList,_msg;try {_addMsg=addMsg} catch(e) {_addMsg=n.g('addMsg')};try {_clearMsg=clearMsg} catch(e) {_clearMsg=n.g('clearMsg')};try {_msgList=msgList} catch(e) {_msgList=n.g('msgList')};try {_msg=msg} catch(e) {_msg=n.g('msg')};
  var __s = {addMsg : typeof addMsg === 'undefined' ? n.g('addMsg') : addMsg, clearMsg : typeof clearMsg === 'undefined' ? n.g('clearMsg') : clearMsg, msgList : typeof msgList === 'undefined' ? n.g('msgList') : msgList, msg : typeof msg === 'undefined' ? n.g('msg') : msg};
  return [__s,n.elt("div",{e1:[4,1,_addMsg,1,2],e2:[0,1,"event"],e3:[4,1,_addMsg,1,4],e4:[0,1,"event"],e5:[4,1,_addMsg,1,6],e6:[0,1,"event"],e7:[4,1,_addMsg,1,8],e8:[0,1,"event"],e9:[4,1,_addMsg,1,10],e10:[0,1,"event"],e11:[4,1,_addMsg,1,12],e12:[0,1,"event"],e13:[4,1,_addMsg,1,14],e14:[0,1,"event"],e15:[4,1,_addMsg,1,16],e16:[0,1,"event"],e17:[4,1,_addMsg,1,18],e18:[0,1,"event"],e19:[4,1,_addMsg,1,20],e20:[0,1,"event"],e21:[4,1,_addMsg,1,22],e22:[0,1,"event"],e23:[4,1,_addMsg,1,24],e24:[0,1,"event"],e25:[4,1,_addMsg,1,26],e26:[0,1,"event"],e27:[4,1,_addMsg,1,28],e28:[0,1,"event"],e29:[4,1,_addMsg,1,30],e30:[0,1,"event"],e31:[4,1,_addMsg,1,32],e32:[0,1,"event"],e33:[4,1,_addMsg,1,34],e34:[0,1,"event"],e35:[4,1,_addMsg,1,36],e36:[0,1,"event"],e37:[4,1,_addMsg,1,38],e38:[0,1,"event"],e39:[4,1,_addMsg,1,40],e40:[0,1,"event"],e41:[4,1,_addMsg,1,42],e42:[0,1,"event"],e43:[4,1,_addMsg,1,44],e44:[0,1,"event"],e45:[4,1,_addMsg,1,46],e46:[0,1,"event"],e47:[4,1,_addMsg,1,48],e48:[0,1,"event"]},{"class":"touchboard","style":"height:200px; background: #27AAFC;text-align:center;"},{"tap":1,"tapstart":3,"tapcancel":5,"longpress":7,"longpressstart":9,"longpresscancel":11,"singletap":13,"singletapstart":15,"singletapcancel":17,"doubletap":19,"doubletapstart":21,"doubletapcancel":23,"swipe":25,"swipestart":27,"swipemove":29,"swipecancel":31,"drag":33,"dragstart":35,"dragmove":37,"dragcancel":39,"pinch":41,"pinchstart":43,"pinchmove":45,"pinchcancel":47},[n.elt("h1",0,0,0,[n.$text(0,["TOUCH ME"])])]),n.elt("div",0,{"class":"msglist","style":"min-height: 50px;"},0,[n.elt("div",{e1:[4,1,_clearMsg]},{"style":"float:right; background: #27AAFC; padding:10px; margin-top:10px;"},{"tap":1},[n.$text(0,["Clear logs"])]),n.$foreach({e1:[9,"msgList"]},"msg_key","msg",0,1,[n.elt("div",0,0,0,[n.$text({e1:[9,"msg"]},["",1])])]),n.$text(0,[" "])])];
});


var eventLog = [];

function addMsg(evt) {
	eventLog.push(evt.duration + "ms - " + evt.type + " from " + evt.target.tagName);
}

function clearMsg() {
    eventLog.splice(0,eventLog.length);

}

// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: gestures,
    data: [eventLog]
});