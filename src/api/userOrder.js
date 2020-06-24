const axios = require('axios')
const config = require('../utils/config')
    //const Const = require('./const')


let headers = {
    Cookie: config.auth.cookie,
    'content-type': 'application/json'
}

let requestHead = {
    appName: config.appName,
    appVer: config.appVersion,
    key: config.key,
    osName: config.orderChannel,
    requestCode: config.api.userOrderBook.requestCode,
    userId: config.userId,
    password: config.password
}

let requestBody = {
    ClientCode: config.clientCode
}



module.exports = async() => {

    let result = false



    let response = {}

    try {
        response = await axios({
            method: 'post',
            url: config.api.userOrderBook.url,
            headers,
            data: {
                head: requestHead,
                body: requestBody
            }
        })
        result = !response.data.body.status
        if (result) {
            return response.data
        } else {
            return result
        }
    } catch (error) {
        console.log('ERROR')
        console.log(error)
        result = false
        return result
    }
}