var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var klass=require("hsp/klass");


var todolist = require("hsp/rt").template(["todo"], function(n){
  var _todo;try {_todo=todo} catch(e) {_todo=n.g('todo')};
  var __s = {todo : typeof todo === 'undefined' ? undefined : todo};
  return [__s,n.elt("div",0,0,0,[n.elt("h3",0,0,0,[n.$text(0,["TODO..."])]),n.elt("ul",0,0,0,[n.$foreach({e1:[9,"todo.data.items"]},"itm_key","itm",0,1,[n.elt("li",0,0,0,[n.$text({e1:[1,1,"itm"]},["",1])])]),n.$text(0,[" "])]),n.elt("form",{e1:[3,2,"todo","addItem"]},0,{"submit":1},[n.elt("input",{e1:[1,3,"todo","data","newTodoItem"]},{"type":"text","value":["",1]},0),n.elt("button",0,0,0,[n.$text({e1:[6,function(a0) {return ("Add #" + (a0 + 1));},2],e2:[1,4,"todo","data","items","length"]},["",1])])])])];
});


// todo controller
var TodoCtl=klass({
    $constructor:function() {
        $set(this, "data", {       // todo data model
            newTodoItem:'', // value of the new todo item
            items:[]        // todo list
        })
    },
    addItem:function() {
        var d=this.data, items=d.items;
        // add new item to the todo list
        items.push(d.newTodoItem);
        // empty new todo field value
        $set(d, "newTodoItem", "");
        // return false to prevent default behaviour
        return false;
    }
});

// Needed by the playground application.
// Update it, but do not remove it!
var ctrl = new TodoCtl();
$set(module, "exports", {
    template: todolist,
    data: [ctrl]
});