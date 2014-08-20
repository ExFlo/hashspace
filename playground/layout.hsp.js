var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var splitter = require("./splitter.hsp.js");

var Class = require("hsp/klass");

var DescriptionCtrl = Class({
    attributes: {
        sample: { type: "object", binding: "1-way" }
    },
    $init: function() {
        this.onSampleChange();
    },
    $refresh: function() {
        if (!this.sample) return;
        var root = this.$getElement(0), before, after;
        if (root) {
            before = root.querySelector(".before");
            after = root.querySelector(".after");
            $set(before, "innerHTML", this.before);
            $set(after, "innerHTML", this.after);
        }
    },

    onSampleChange: function() {
        if (!this.sample) return;
        var parts = this.sample.description.split("[#output]");
        $set(this, "before", parts[0]);
        $set(this, "after", parts[1]);
    }
});


var desc = require("hsp/rt").template({ctl:[DescriptionCtrl,"DescriptionCtrl"],ref:"ctrl"}, function(n){
  return [n.elt("div",0,{"id":"description"},0,[n.$if({e1:[1,2,"ctrl","sample"]},1,[n.elt("div",0,{"class":"before"},0)]),n.elt("div",0,{"id":"output","class":"output"},0),n.elt("div",0,{"id":"logs","class":"logoutput"},0),n.$if({e1:[1,2,"ctrl","sample"]},1,[n.elt("div",0,{"class":"after"},0)])])];
});




var mainLayout =$set(exports, "mainLayout", require("hsp/rt").template(["data","playground"], function(n){
  var _sampleList,_hideNavHover,_splitterReleased,_splitter,_desc;try {_sampleList=sampleList} catch(e) {_sampleList=n.g('sampleList')};try {_hideNavHover=hideNavHover} catch(e) {_hideNavHover=n.g('hideNavHover')};try {_splitterReleased=splitterReleased} catch(e) {_splitterReleased=n.g('splitterReleased')};try {_splitter=splitter} catch(e) {_splitter=n.g('splitter')};try {_desc=desc} catch(e) {_desc=n.g('desc')};
  return [n.cpt([_sampleList,"sampleList"],{e1:[1,1,"data"],e2:[1,1,"playground"]},{"data":["",1],"playground":["",2]},0),n.$text(0,[" "]),n.elt("div",{e1:[6,function(a0) {return ["hsp-sample",((a0)? ''+"hsp-sample-full":'')].join(' ');},2],e2:[1,2,"data","navCollapsed"],e3:[4,1,_hideNavHover,1,4,1,5],e4:[0,1,"event"],e5:[1,1,"data"]},{"class":["",1]},{"click":3},[n.$text(0,[" "]),n.elt("h4",0,{"class":"title"},0,[n.$text({e1:[1,2,"data","sampleTitle"]},["",1])]),n.$text(0,[" "]),n.elt("div",{e1:[1,2,"data","splitterPos"]},{"class":"editor","style":["width: ",1]},0,[n.elt("div",0,{"id":"editor"},0)]),n.$text(0,[" "]),n.cpt([_splitter,"splitter"],{e1:[4,1,_splitterReleased,1,2,1,3,1,4],e2:[0,2,"event","position"],e3:[1,1,"data"],e4:[1,1,"playground"]},{"type":"horizontal","size":"3"},{"release":1}),n.$text(0,[" "]),n.elt("div",{e1:[1,2,"data","splitterPos"]},{"class":"description","style":["left: ",1]},0,[n.elt("div",0,0,0,[n.elt("h4",0,0,0,[n.$text(0,["Description"])]),n.cpt([_desc,"desc"],{e1:[7,2,function(i,a0,a1) {return [a0,a1][i];},2,3],e2:[1,2,"data","samples"],e3:[1,2,"data","sampleIndex"]},{"sample":["",1]},0)])])])];
}));


function splitterReleased(position, data, playground) {
    $set(data, "splitterPos", position + "px");
    editorResize(playground);
}

function editorResize(playground, delay) {
    // Pseudo nextTick when delay = 0
    delay = delay || 0;
    setTimeout(function() {
        playground.editor.resize(true);
    }, delay);
}

function collapseNav(event, data, playground) {
    $set(data, "navCollapsed", !data.navCollapsed);
    $set(data, "navHover", false);
    editorResize(playground, 218);
    event.preventDefault();
}

function showListHover(event, data) {
    $set(data, "navHover", !data.navHover);
    event.preventDefault();
    event.stopPropagation();
}

function hideNavHover(event, data) {
    if (data.navHover) {
        $set(data, "navHover", false);
    }
}


var sampleList = require("hsp/rt").template(["data","playground"], function(n){
  var _hideNavHover,_collapseNav,_showListHover;try {_hideNavHover=hideNavHover} catch(e) {_hideNavHover=n.g('hideNavHover')};try {_collapseNav=collapseNav} catch(e) {_collapseNav=n.g('collapseNav')};try {_showListHover=showListHover} catch(e) {_showListHover=n.g('showListHover')};
  return [n.elt("div",{e1:[6,function(a0) {return ["samples-list",((a0)? ''+"samples-list-collapsed":'')].join(' ');},2],e2:[1,2,"data","navCollapsed"],e3:[4,1,_hideNavHover,1,4,1,5],e4:[0,1,"event"],e5:[1,1,"data"]},{"class":["",1]},{"click":3},[n.$text(0,[" "]),n.elt("a",{e1:[6,function(a0) {return (a0? "Expand sidebar" : "Collapse sidebar");},2],e2:[1,2,"data","navCollapsed"],e3:[4,1,_collapseNav,1,4,1,5,1,6],e4:[0,1,"event"],e5:[1,1,"data"],e6:[1,1,"playground"]},{"href":"","class":"collapse","title":["",1]},{"click":3},[n.elt("span",0,{"class":"icon"},0)]),n.$text(0,[" "]),n.$if({e1:[1,2,"data","navCollapsed"]},1,[n.elt("a",{e1:[4,1,_showListHover,1,2,1,3],e2:[0,1,"event"],e3:[1,1,"data"]},{"href":"","class":"showlist action","title":"See samples list"},{"click":1},[n.elt("span",0,{"class":"icon"},0)]),n.$text(0,[" "])],[n.elt("h4",0,0,0,[n.$text(0,["Samples"])])]),n.$text(0,[" "]),n.elt("div",{e1:[6,function(a0) {return (a0? "list-hover" : "list");},2],e2:[1,2,"data","navHover"]},{"class":["",1]},0,[n.$foreach({e1:[1,2,"data","samples"]},"index","sample",0,1,[n.$if({e1:[1,2,"sample","category"]},1,[n.elt("div",0,{"class":"category"},0,[n.$text({e1:[1,2,"sample","category"]},["",1])])],[n.elt("div",{e1:[6,function(a0,a1) {return ["item",(((a0 === a1))? ''+"selected":'')].join(' ');},2,3],e2:[1,2,"data","sampleIndex"],e3:[1,1,"index"]},{"class":["",1]},0,[n.elt("a",{e1:[6,function(a0) {return ("#" + a0);},2],e2:[1,2,"sample","folder"]},{"href":["",1]},0,[n.$text({e1:[1,2,"sample","title"]},["",1])])])])]),n.$text(0,[" "])])])];
});



var errorList =$set(exports, "errorList", require("hsp/rt").template(["errors"], function(n){
  return [n.$if({e1:[6,function(a0,a1) {return (a0 && a1);},2,3],e2:[1,1,"errors"],e3:[1,2,"errors","length"]},1,[n.elt("div",0,{"class":"errorlist"},0,[n.elt("ul",0,0,0,[n.$foreach({e1:[1,1,"errors"]},"error_key","error",0,1,[n.elt("li",0,0,0,[n.elt("div",{e1:[1,2,"error","type"]},{"class":["",1]},0,[n.$text({e1:[1,2,"error","message"]},[" ",1," "])]),n.$if({e1:[6,function(a0,a1) {return (a0 || a1);},2,3],e2:[1,2,"error","line"],e3:[1,2,"error","file"]},1,[n.elt("div",0,{"class":"ctxt"},0,[n.$text({e1:[1,2,"error","file"]},["[",1,"] "]),n.$if({e1:[1,2,"error","line"]},1,[n.$text({e1:[1,2,"error","line"],e2:[1,2,"error","column"]},["line: ",1,", column: ",2])])])]),n.$if({e1:[1,2,"error","code"]},1,[n.elt("div",0,{"class":"code"},0,[n.$text(0,[">> code: "]),n.elt("span",0,{"class":"codetext"},0,[n.$text({e1:[1,2,"error","code"]},["",1])])])])])]),n.$text(0,[" "])])])])];
}));