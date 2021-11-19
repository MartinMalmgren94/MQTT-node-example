const mqtt = require('mqtt');

var client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", () => { 
    setInterval(() => {
        var random = Math.random() * 50;

        if(random < 30){
            client.publish("Martin Malmgren", "Hello MQTT random number less than 30: " + random)
        }
        if(random > 30){
            client.publish("Martin Malmgren", "Hello MQTT random number more than 30: " + random)
        }
    }, 3000)
})