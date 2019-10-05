const express = require('express');
const router = express.Router();
var Simplify = require("simplify-commerce"),
client = Simplify.getClient({
    publicKey: 'sbpb_OGI3MjliOTUtYWMyZS00ZTE4LWFmYTgtNTdkZDQ1NTBhZGFm',
    privateKey: '6IpmiveAFIhKuVmp6CONqGsVnJKfuPc4C2q1endRa2l5YFFQL0ODSXAOkNtXTToq'
});


router.get('/simplify', function(req, res) {
  res.send('Blah blah blah');
});


router.post('/cardToken', async (req,res)=>{

    client.cardtoken.create({
      card : {
         addressState : "MO",
         expMonth : "11",
         expYear : "35",
         addressCity : "OFallon",
         cvc : "123",
         number : "5105105105105100"
      }
    }, function(errData, data){

      if(errData){
          console.error("Error Message: " + errData.data.error.message);
          // handle the error
          return;
      }

      console.log("Success Response: " + JSON.stringify(data));
      res.send(data);
    });
});

router.post('/addCard', async (req,res)=>{

    client.customer.update({
        id: req.body.customerID,
        card : {
           id : "",
           expMonth : "5",
           expYear : "35",
           cvc : "456",
           number : "5120790000000083"
        },
        reference : "Ref1"
    }, function(errData, data){

        if(errData){
            console.error("Error Message: " + errData.data.error.message);
            // handle the error
            return;
        }
        console.log("Success Response: " + JSON.stringify(data));
    });

});


module.exports = router;
