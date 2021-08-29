var express = require('express');
var router = express.Router();
const RestClient = require('@bootpay/server-rest-client').RestClient;

router.get('/', function(req, res, next) {
    res.status(200).send("Bootpay API");
});

router.get('/verification', function(req, res, next) {
    RestClient.setConfig(
        "61176c377b5ba4001d52a085",
        "pP3BMgNmcpS/ccwJECDzgVv6Lo6aOedyZmLpdnZzPZQ="
    );
    
    RestClient.getAccessToken().then(function (response) {
        let token = null;

        if (response.status === 200) {
            token = response.data.token;
            console.log(token);

            res.status(200).send("Bootpay Verification");
        } else{
            res.status(400).send("Failed to get BP Token");
        }
    });
});

module.exports = router;

/*
612b657c0199430036b50f7d

612b65530d681b0039e5fad1
*/