class Singleton {
    static instance;    

    static getInstance() {
        return this.instance;
    }
}

module.exports = Singleton
