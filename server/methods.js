Meteor.methods({
  sendMessage: function() {
    var twilio = Meteor.npmRequire('twilio')('AC61ca73151a4ad2b0e4c7255e828ce201', 'a8dd63a900b6ad6bd5e2b60f117993b1');

    twilio.sendMessage({
      to:'+6594858097', // Any number Twilio can deliver to
      from: '+15594683055', // A number you bought from Twilio and can use for outbound communication
      body: 'word to your mother.' // body of the SMS message
    }, function(err, responseData) { //this function is executed when a response is received from Twilio
      if (!err) { // "err" is an error received during the request, if any
        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1
        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."
      } else {
        console.log(err);
      }
    });
  }
});

