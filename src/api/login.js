const axios = require('axios')
const config = require('../utils/config')
const enc = require("../utils/encrypt.js")

module.exports = async(email, password, dob) => {
    const requestData = {
        head: {
            appName: config.appName,
            appVer: config.appVersion,
            key: config.key,
            osName: config.orderChannel,
            requestCode: config.api.userLogin.requestCode,
            userId: config.userId,
            password: config.password
        },
        body: {
            Email_id: enc(email),
            Password: enc(password),
            LocalIP: "192.168.10.10",
            PublicIP: "192.168.10.10",
            HDSerailNumber: '5QE0RCHR',
            MACAddress: '50-CB-60-4A-D5-32',
            MachineID: '039378',
            VersionNo: '1.0',
            RequestNo: '1',
            My2PIN: enc(dob),
            ConnectionType: '1'
        }
    }

    console.log('Authenticating...')
    let result = false
    let response = {}

    try {
        response = await axios({
                method: 'post',
                url: config.api.userLogin.url,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: requestData
            })
            //console.log(response.data)
        result = !response.data.body.status
            //console.log(result)
        if (result) {
            let cookie = response.headers['set-cookie']
            if (cookie) {
                //cookie = cookie.split(';')[0]
                //config.auth.cookie = `${cookie};`
                console.log(cookie)
            }

            //config.clientCode = ClientCode
        }



    } catch (error) {
        result = false
        console.log('ERROR')
            //console.log(response)
            //console.log(error)
    } finally {

        if (result) {
            console.log('User logged')

        }

        return result
    }
}