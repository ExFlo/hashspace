var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var klass=require("hsp/klass");

// klass is a utility to create JS objects with constructors & prototypes
var Timer=klass({
    attributes: {
      initvalue:{type:"int",defaultValue:0,binding:"none"}
    },
    $init:function() {
      $set(this, "secondsElapsed", this.initvalue);
      $set(this, "_iid", setInterval(this.tick.bind(this),1000));
    },
    $dispose:function() {
      clearInterval(this._iid);
    },
    tick:function() {
      $set.inc(this, "secondsElapsed");
    }
});


var timer = require("hsp/rt").template({ctl:[Timer,"Timer"],ref:"t"}, function(n){
  var _t;try {_t=t} catch(e) {_t=n.g('t')};
  var __s = {t : typeof t === 'undefined' ? n.g('t') : t};
  return [__s,n.$text({e1:[9,"t.secondsElapsed"]},["Elapsed time: ",1,"s"])];
});



var test = require("hsp/rt").template([], function(n){
  var _timer;try {_timer=timer} catch(e) {_timer=n.g('timer')};
  var __s = {timer : typeof timer === 'undefined' ? n.g('timer') : timer};
  return [__s,n.$text(0,["Sample showing two timer instances with different init values:"]),n.elt("br",0,0,0),n.cpt([_timer,"timer"],0,0,0),n.$text(0,[" "]),n.elt("br",0,0,0),n.cpt([_timer,"timer"],0,{"initvalue":"10"},0)];
});



// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: test
});