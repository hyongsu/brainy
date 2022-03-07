import axios from 'axios'

// https://random-data-api.com/api/users/random_user
// https://random-data-api.com/api/nation/random_nation

const instance = axios.create({
    baseURL: "https://random-data-api.com/api/"
})

export async function getRandomUser(size=10) {
    const users = await instance.get(`/users/random_user?size=${size}`)    // query parameter  (`..?`) 백틱으로 사용해야 함
    return users
}

export async function getRandomFlag(size=10) {
    const flags = await instance.get('/nation/random_nation')
    return flags
}