setInterval(()=>{
    console.log("hello there")
},3000);

console.log("i am running first")

//output
// i am running first
// hello there
// hello there
// hello there
// .....


// what this means is that the callback will be offloaded and the console log will be printed first and later for every 3 seconds of interval the 'hello there' will print