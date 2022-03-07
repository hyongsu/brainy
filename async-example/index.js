// 비동기 / 동기

// 1. 콜백 함수

// 2. Promise

// 3. async await

import fs from 'fs'
import fsPromise from 'fs/promises'


// 콜백함수, 긴시간....파일 준비되면 이 콜백함수를 실행하도록 함
fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
        console.error(`callback: ${err}`)
        return
    }

    JSONParser(data, (err, data) => {
        if (err) {
            console.error()
        }

        console.log(`callback: ${data.hello}`)
    })

})

// promise 타입은

fsPromise.readFile('data.json', 'utf-8')
    .then(data => console.log(`promise: ${data}`))
    .catch(err => console.error(`promise: ${err}`))

(async() => {
    try {
        const data = await fsPromise.readFile('data.json', 'utf-8')
        console.log(`async: ${data}`)
    } catch (err) {
        console.error(`async: ${err}`)
    }
})();

function JSONParser(data, callback) {
    if (err)
        console.error(`callback: ${err}`)
        return
    }
    setTimeout(() => {
        try {
            callback(null, JSON,parse(data))
        } catch (err) {
            callback(err)
        }
    }, 2000)

function capitalize(data, callback) {
    setTimeout(() => {
        try {
            callback(null, data.charAt(0),toUpperCase() + data)
        } catch (err) {
            callback(err)
        }
    }
    )
}