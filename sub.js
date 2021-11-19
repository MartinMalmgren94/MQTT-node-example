// Importing mqtt
const mqtt = require("mqtt");
// class for getting machineId
const {getMachineId} = require('./uuid')
// Creating mqtt client connected to the broker
var client = mqtt.connect("mqtt://broker.hivemq.com")
// Getting machine id for creating uniqe
const uuid = getMachineId()
// Client listen when it have connected to the broker
client.on("connect", () => {
    client.subscribe("TestForAnNodeExample" + uuid);
})
// Client listen when an message are published.
client.on("message", (topic, message) => {
    console.log("message:")
    console.log(message.toString())
})