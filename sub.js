// Importing mqtt
const mqtt = require("mqtt");
// Creating mqtt client connected to the broker
var client = mqtt.connect("mqtt://broker.hivemq.com")
// Client listen when it have connected to the broker
client.on("connect", () => {
    client.subscribe("TestForAnNodeExample927118");
    console.log("Success on sub.")
})
// Client listen when an message are published.
client.on("message", (topic, message) => {
    console.log("message:")
    console.log(message.toString())
})