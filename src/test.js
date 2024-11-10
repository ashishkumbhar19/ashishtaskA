app.post('/userLoginWithNumber', function (req, res) {

    var userobj = req.body;

    function sendSms(message, otp, userFound, token) {
        var request = require('request');
        var options = {
            'method': 'POST',
            'url': 'http://sms.pearlsms.com/public/sms/sendjson',
            'headers': {
                'apikey': 'b96d39f95378438fa615ed0ba3435bd0',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([{
                "message": "Hello " + userFound.name + ", Your OTP for logging in is: " + otp + " Enjoy the best in Food & Music with those you Love.! FML Today -Food Music Love",
                "sender": "FMLPUB",
                "smstype": "TRANS",
                "numbers": userFound.phoneNumber,
                "unicode": "no"
            }])
        };
        function responseSuccess(tken, message, otp, userFound) {
            return res.json({
                success: true,
                data: {
                    userFound: userFound,
                    auth_token: tken,
                    otp: otp,
                    message: message
                },
                error: null
            });
        }


        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            responseSuccess(token, message, otp, userFound)
        });
    }
    // function userFoundResponse(userFound) {
    //     return res.json({
    //         success: true,
    //         data: userFound,
    //         error: null
    //     });
    // }
    function responseFailure(error) {
        return res.json({
            success: false,
            data: {},
            error: error
        });
    }

    User.findOne({ phoneNumber: userobj.phoneNumber }, function (err, userFound) {
        if (!err && userFound != null) {

            if (userFound.isDeleted != 1) {
                const otp = Math.floor(1000 + Math.random() * 9000);
                User.findOneAndUpdate({ phoneNumber: userobj.phoneNumber }, {
                    otp: otp,
                    gcmId: userobj.gcmId,
                    userAgent: userobj.userAgent
                }, function (err) {
                    if (err) console.log(err);
                });
                sendSms("OTP Send Successfully", otp, userFound, userFound.token, res);
            } else {
                responseSuccess(userFound.token, "User Found", "", userFound);
            }
        } else {
            responseFailure("User Not Found", res);
        }

    });

});
