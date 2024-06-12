// console.log(1,2,3);

// import { todo } from "node:test"

var toDoArray = [

    {
        "id": 1,
        "text": "saqme1", 
        "isCompleted": false

    },
    {
        "id": 2,
        "text": "saqme2", 
        "isCompleted": false
        
    },
    {
        "id": 3,
        "text": "saqme3", 
        "isCompleted": false

    }

]
// console.log(toDoArray);

function find(id1) {
    let a = toDoArray.find(x => x.id==id1)
    return a
    
}
function findmax() {
    let b = toDoArray.map(x => x.id)
    let m = Math.max(...b)
    return m
    
}
// console.log(find(5));

function add(txt) {
    let newId = findmax() + 1
    let newItem = {
        "id": newId, 
        "text": txt, 
        "isCompleted": false
        
    }
    toDoArray.push(newItem)
}
function remove(id1) {
    let del = toDoArray.filter(x => x.id != id1)
    toDoArray = del
}
function shesrulebulia(id1) {
    toDoArray.forEach(x => {
        if (id1 == x.id ) {
            x.isCompleted = true           
        }
    });
    
}
function displayComplete() {
   let complete = toDoArray.filter(x => x.isCompleted)
   console.log(complete);
}
function displayIncomplete() {
    let incomplete = toDoArray.filter(x => !x.isCompleted)
   console.log(incomplete);
    
}
function clearComplete() {
    toDoArray = toDoArray.filter(x => !x.isCompleted) 
    
}
function clearInComplete() {
    toDoArray = toDoArray.filter(x => x.isCompleted) 
    
}
function clearAll() {
    toDoArray = [] 
    
}


add("gela")
add("levani")
shesrulebulia(3)
shesrulebulia(5)
// displayComplete()
// displayIncomplete()
// clearComplete()
// clearInComplete()
clearAll()
// remove(2)
// remove(9)
console.log(toDoArray);
// console.log(findmax());





