const mqtt = require("mqtt");
var client = mqtt.connect("mqtt://broker.hivemq.com")

client.on("connect", () => {
    client.subscribe("Martin Malmgren");
    console.log("Success on sub.")
})

client.on("message", (topic, message) => {
    console.log("message:")
    console.log(message.toString())
})