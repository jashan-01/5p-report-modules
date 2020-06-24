const axios = require('axios')
const config = require('../utils/config')
    //const Const = require('./const')
    // if (!config.isLogged) {
    //     await require('./authenticate')()
    //   }



let headers = {
    Cookie: config.auth.cookie,
    'content-type': 'application/json'
}

let requestHead = {
    appName: config.appName,
    appVer: config.appVersion,
    key: config.key,
    osName: config.orderChannel,
    requestCode: config.api.userHolding.requestCode,
    userId: config.userId,
    password: config.password
}

let requestBody = {
    ClientCode: config.clientCode
        // RequestNo: '11',
        // ConnectionType: '1'
}

module.exports = async() => {
    let result = false
    let response = {}

    try {
        response = await axios({
                method: 'post',
                url: config.api.userHolding.url,
                headers,
                data: {
                    head: requestHead,
                    body: requestBody
                }
                // withCredentials: true
            })
            //console.log(response.data)
        result = !response.data.body.status
        if (result) {
            return response.data
        } else {
            return result
        }
    } catch (error) {
        result = false
        console.log('ERROR')
        console.log(error)
        return result
    }
}