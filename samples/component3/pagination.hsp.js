var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var klass=require("hsp/klass");

function calculateNoOfPages(collectionSize, pageSize) {
    return Math.ceil(collectionSize / pageSize);
}

function rebuildPagesModel(noOfPages) {
    var pages = [];
    for (var i=0; i<noOfPages; i++) {
        pages.push(i);
    }
    return pages;
}

function rebuildInternalModel(ctl) {
   $set(ctl, "noOfPages", calculateNoOfPages(ctl.collectionsize, ctl.pagesize));
   $set(ctl, "pages", rebuildPagesModel(ctl.noOfPages));
   ctl.selectPage(ctl.activepage);
}

var Pagination=klass({
    attributes: {
      "collectionsize":{type:"int", defaultValue:0, binding:"1-way"},
      "pagesize":{type:"int", defaultValue:10, binding:"1-way"},
      "activepage":{type:"int", defaultValue:0, binding:"2-way"},
      "onpageselect":{type:"callback"}
    },
    $init:function() {
       rebuildInternalModel(this);
    },
    selectPage: function(newPageNo) {
        newPageNo = Math.min(Math.max(0, newPageNo), this.noOfPages-1);
        if (this.activepage!==newPageNo) {
          $set(this, "activepage", newPageNo);
          this.onpageselect({pageNumber:this.activepage});
        }
    },
    onCollectionsizeChange: function() {
        rebuildInternalModel(this);
    },
    onPagesizeChange: function() {
       rebuildInternalModel(this);
    }
});


var pagination = require("hsp/rt").template({ctl:[Pagination,"Pagination"],ref:"p"}, function(n){
  return [n.elt("ul",0,{"class":"pagination"},0,[n.elt("li",{e1:[6,function(a0) {return (((a0 === 0))? ''+"disabled":'');},2],e2:[1,2,"p","activepage"]},{"class":["",1]},0,[n.elt("a",{e1:[3,2,"p","selectPage",1,2],e2:[6,function(a0) {return (a0 - 1);},3],e3:[1,2,"p","activepage"]},0,{"click":1},[n.$text(0,["Previous"])])]),n.$foreach({e1:[1,2,"p","pages"]},"page_key","page",0,1,[n.elt("li",{e1:[6,function(a0,a1) {return (((a0 == a1))? ''+"active":'');},2,3],e2:[1,1,"page"],e3:[1,2,"p","activepage"]},{"class":["",1]},0,[n.elt("a",{e1:[3,2,"p","selectPage",1,2],e2:[1,1,"page"]},0,{"click":1},[n.$text({e1:[6,function(a0) {return (a0 + 1);},2],e2:[1,1,"page"]},["",1])])])]),n.$text(0,[" "]),n.elt("li",{e1:[6,function(a0,a1) {return (((a0 >= (a1 - 1)))? ''+"disabled":'');},2,3],e2:[1,2,"p","activepage"],e3:[1,2,"p","noOfPages"]},{"class":["",1]},0,[n.elt("a",{e1:[3,2,"p","selectPage",1,2],e2:[6,function(a0) {return (a0 + 1);},3],e3:[1,2,"p","activepage"]},0,{"click":1},[n.$text(0,["Next"])])])])];
});



var paginationTest = require("hsp/rt").template(["model"], function(n){
  var _updateSelection,_pagination;try {_updateSelection=updateSelection} catch(e) {_updateSelection=n.g('updateSelection')};try {_pagination=pagination} catch(e) {_pagination=n.g('pagination')};
  return [n.elt("div",0,{"class":"section3"},0,[n.elt("label",0,{"class":"fieldlabel"},0,[n.$text(0,["Active page: "])]),n.elt("input",{e1:[1,2,"model","active"]},{"type":"number","model":["",1]},0),n.elt("br",0,0,0),n.elt("label",0,{"class":"fieldlabel"},0,[n.$text(0,["Collection size: "])]),n.elt("input",{e1:[1,2,"model","collectionSize"]},{"type":"number","model":["",1]},0),n.elt("br",0,0,0),n.elt("label",0,{"class":"fieldlabel"},0,[n.$text(0,["Page size: "])]),n.elt("input",{e1:[1,2,"model","pageSize"]},{"type":"number","model":["",1]},0),n.elt("br",0,0,0),n.$text(0,["Last page selection  "]),n.elt("i",0,0,0,[n.$text(0,[" - from event"])]),n.$text(0,[": "]),n.elt("span",0,{"class":"textValue"},0,[n.$text({e1:[1,2,"model","lastSelectedPage"]},["",1])])]),n.cpt([_pagination,"pagination"],{e1:[1,2,"model","active"],e2:[1,2,"model","collectionSize"],e3:[1,2,"model","pageSize"],e4:[4,1,_updateSelection,1,5],e5:[0,2,"event","pageNumber"]},{"activepage":["",1],"collectionsize":["",2],"pagesize":["",3]},{"pageselect":4})];
});


var model = {
    active: 4,
    collectionSize: 99,
    pageSize: 10,
    lastSelectedPage: "(...)"
}

function updateSelection(newPageNumber) {
  $set(model, "lastSelectedPage", newPageNumber);
}

// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: paginationTest,
    data: [model]
});