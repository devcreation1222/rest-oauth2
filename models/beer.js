// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var BeerSchema = new mongoose.Schema({
    name: String,
    type: String,
    quantity: Number
});

// Export the Mongoose Model
module.exports = mongoose.model('Beer', BeerSchema);