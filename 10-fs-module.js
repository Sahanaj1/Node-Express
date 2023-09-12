const {readFileSync,writeFileSync, write}=require('fs');


const first=readFileSync('./content/first.txt','utf-8')
console.log(first)

writeFileSync('./content/result-sync.txt',`here is the result: ${first}`)
const result=readFileSync('./content/result-sync.txt','utf-8')
console.log(result)


writeFileSync('./content/second.txt',`here is the result: ${first}`,{flag:'a'})
const second=readFileSync('./content/second.txt','utf-8')
console.log(second)