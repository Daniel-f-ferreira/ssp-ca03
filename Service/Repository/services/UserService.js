const userRepository = require('../repositories/UserRepository.js')

function authentication (username, password) {
    return userRepository.getUser(username);
}

module.exports = { authentication };