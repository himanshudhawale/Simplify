const express = require('express');
const router = express.Router();
var Simplify = require("simplify-commerce"),
client = Simplify.getClient({
    publicKey: 'REMOVED',
    privateKey: 'REMOVED'
});

router.post('/card_token',async (req,res)=>{


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
});
});
