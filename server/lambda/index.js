var Alexa = require('alexa-sdk');

var handlers = {
    'LaunchRequest': function () {
        this.emit('TestIntent');
    },

    'GetNewFactIntent': function () {

        this.emit(':tellWithCard', 'speechOutput', 'SKILL_NAME', 'randomFact');
    },

    'TestIntent': function () {
        this.emit(':tell', 'Hello World!, form abc');
    },

    'MyIntent': function () {
        this.emit(':tell', 'my intent');
    }
    ,

    'StartMeeting': function() {
        this.emit(':tell', 'starting a new meeting '+this.event.request.intent.slots.meetingName.value);
    },

    'AddParticipant': function() {
      this.emit(':tell', this.event.request.intent.slots.participantname.value);
    },

    'RecordData': function() {
      this.emit(':tell', this.event.request.intent.slots.valA.value+' '
                        +this.event.request.intent.slots.valB.value+' '
                        +this.event.request.intent.slots.valC.value+' '
                        +this.event.request.intent.slots.valD.value+' '
                        +this.event.request.intent.slots.valE.value+' '
                        +this.event.request.intent.slots.valF.value+' '
                        +this.event.request.intent.slots.valG.value+' '
                        +this.event.request.intent.slots.valH.value+' '
                        +this.event.request.intent.slots.valI.value+' '
                        +this.event.request.intent.slots.valJ.value
                      );
    }

 };



exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
