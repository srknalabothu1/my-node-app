// config/db.js
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/mydatabase'; 

module.exports = { DB_URI };

