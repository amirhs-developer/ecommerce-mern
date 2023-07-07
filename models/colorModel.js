const mongoose = require('mongoose'); // Erase if already required

/**
 * title String Required unique index
 */

// Declare the Schema of the Mongo model
var colorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true,
    }
},{
    timestamps: true
});

//Export the model
const Color = mongoose.model('Color', colorSchema);
module.exports = Color;