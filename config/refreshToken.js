const jwt = require('jsonwebtoken');
require("dotenv").config();
//? signature algorithm
/**
data = base64URLEncode(header) + '.' + base64URLEncode(payload);
hashedData = hash(data,secret_key);
signature = base64URLEncode(hashedData);
*/

const generateRefreshToken = (id) => {
    return jwt.sign({id},process.env.SECRET_KEY,{expiresIn: '3d'})
}

module.exports = {generateRefreshToken};