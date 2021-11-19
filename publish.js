// Importing mqtt
const mqtt = require('mqtt');
// Creating mqtt client connected to the broker
var client = mqtt.connect("mqtt://broker.hivemq.com");
// Client listen after event "connect"
client.on("connect", () => { 
    // When it's connected ever 3 sec there will be a random number that will publish.
    setInterval(() => {
        var random = Math.random() * 50;
        if(random < 30){
            client.publish("TestForAnNodeExample927118", "Hello MQTT random number less than 30: " + random)
        }
        if(random > 30){
            client.publish("TestForAnNodeExample927118", "Hello MQTT random number more than 30: " + random)
        }
    }, 3000)
})