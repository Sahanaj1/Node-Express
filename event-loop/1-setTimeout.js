console.log("first hello");

setTimeout(()=>{
    console.log("second hello");
},0);

console.log("third hello");


//output
// first hello
// third hello 
// second hello



// what it means is js is synchronous but when it encounters the setTimeout (callback) then offloads them and executes other tasks first and then completes the callback
