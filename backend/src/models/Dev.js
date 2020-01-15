const mongoose = require('mongoose');s

const DevShema = new mongoose.Schema({
   name: String,
   github_username: String,
   bio: String,
   avatar_url: String,
   techs: [String]
});

module.exports = mongoose.model('Dev', DevShema);s