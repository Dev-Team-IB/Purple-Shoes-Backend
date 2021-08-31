var express = require('express');
var router = express.Router();
const RestClient = require('@bootpay/server-rest-client').RestClient;

router.get('/', function(req, res, next) {
    res.status(200).send("Bootpay API");
});

router.get('/verification', function(req, res, next) {

    let receipt_id = req.body.receipt_id

    RestClient.setConfig(
        "61176c377b5ba4001d52a085",
        "pP3BMgNmcpS/ccwJECDzgVv6Lo6aOedyZmLpdnZzPZQ="
    );

    RestClient.getAccessToken().then(function (response) {
        // Access Token을 발급 받았을 때
        if (response.status === 200 && response.data.token !== undefined) {
            RestClient.verify(receipt_id).then(function (_response) {
                // 검증 결과를 제대로 가져왔을 때
                if (_response.status === 200) {
                    console.log(_response);
                    res.status(200).send(_response);
                } else{
                    res.status(400).send("Failed to get receipt info");
                }
            }).catch(
                function (error){
                    res.status(400).send(error);
                    console.log(error);
                }
            );
        }  else{
            res.status(400).send("Failed to get BP Token");
        }
    });
    
});

module.exports = router;


// 612b657c0199430036b50f7d
// 612b65530d681b0039e5fad1