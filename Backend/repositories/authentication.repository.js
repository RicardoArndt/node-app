const Singleton = require('../commons/singleton');

class AuthenticationRepository extends Singleton {
    counter = 0;
    static instance = new AuthenticationRepository();

    login() {
        return `CurrentCount: ${this.counter++}`;
    }
}

module.exports = AuthenticationRepository;