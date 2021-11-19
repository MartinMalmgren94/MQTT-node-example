// Getting lib
const {machineId} = require('node-machine-id');
// Function for getting machineID
async function getMachineId() {
    return await machineId();
}
// Exporting functions.
module.exports = {getMachineId}