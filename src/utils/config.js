module.exports = {
    api: {
        orderRequest: {
            requestCode: '5POrdReq',
            url: 'https://Openapi.5paisa.com/VendorsAPI/Service1.svc/V1/OrderRequest'
        },
        orderStatus: {
            requestCode: '5POrdStatus',
            url: 'https://Openapi.5paisa.com/VendorsAPI/Service1.svc/OrderStatus'
        },
        userLogin: {
            requestCode: '5PLoginV2',
            url: 'https://Openapi.5paisa.com/VendorsAPI/Service1.svc/V2/LoginRequestMobileNewbyEmail'
        },
        userMargin: {
            requestCode: '5PMarginV3',
            url: 'https://Openapi.5paisa.com/VendorsAPI/Service1.svc/V3/Margin'
        },
        userOrderBook: {
            requestCode: '5POrdBkV2',
            url: 'https://openapi.5paisa.com/VendorsAPI/Service1.svc/V2/OrderBook'
        },
        userPositions: {
            requestCode: '5PNPNWV1',
            url: 'https://Openapi.5paisa.com/VendorsAPI/Service1.svc/V1/NetPositionNetWise'
        },
        userHolding: {
            requestCode: '5PHoldingV2',
            url: 'https://Openapi.5paisa.com/VendorsAPI/Service1.svc/V2/Holding'
        }
    },


    appName: "5P55155874",
    appVersion: "1.0",
    key: "V1qjwhknjzkcffeqgjkDp7aqvXUHQbAF",
    orderChannel: "WEB",
    requestCode: "5PLoginV2",
    userId: "CirMuUW85Fi",
    password: "3wREYKyYoOX",

    auth: {
        cookie: '5paisacookie=m5uphbojqemjpiyazm1s1kde; Path=/; Domain=openapi.5paisa.com; HttpOnly;'
    },

    clientCode: "55155874",
    incrementalOrderId: 101,
    isLogged: false,
    lastRemoteOrderID: '',
    lastExchOrderID: 0,
    lastTradedQty: 0
}