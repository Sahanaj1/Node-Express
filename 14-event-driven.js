const EventEmitter=require('events');


const custoEmiiter=new EventEmitter();//event emitter class


custoEmiiter.on('response',()=>{
    console.log("clicked")
})

custoEmiiter.emit('response')   //the string in emit matches the string in 'on' hence the callback will be executed. it becomes event driven on nodejs .

//the 'on' and 'emit' order matters alot, if emit is placed before 'on' then the emit wont trigger the on event