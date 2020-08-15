const Singleton = require('../commons/singleton');
const autenticationRepository = require('../repositories/authentication.repository').getInstance();

class AuthenticationService extends Singleton {
    static instance = new AuthenticationService();

    login() {
        return autenticationRepository.login();
    }
}

module.exports = AuthenticationService;