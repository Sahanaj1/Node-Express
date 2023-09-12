const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err)
    }
    const first = res;
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err)
        }
        const second = res;
        writeFile('./content/result-async.txt', `here is the result: ${first} and ${second}`, (err, res) => {
            if (err) {
                console.log(err)
            }
            console.log(res)
        })
    })
})