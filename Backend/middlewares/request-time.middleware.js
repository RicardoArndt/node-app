const requestTime = (req, res, next) => {
    console.log('Request --> Path: %s, Time: %s', req.path, Date.now());
    next();
};

module.exports = requestTime;