const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const validateMongodbId = (id) => {
    const isValid = ObjectId.isValid(id);
    if(!isValid){
        throw new Error('This is is not valid || not found');
    }
}

module.exports = validateMongodbId;