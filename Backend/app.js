const express = require('express');
const app = express();
const port = 3001;
var server = app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});

const requestTime = require('./middlewares/request-time.middleware');
app.use(requestTime);

const registerRoutes = require('./routes/index');
registerRoutes.registerRoutes(app, server);

app.get('/routes-defined', (req, res) => {
    res.json(registerRoutes.routesDefineds);
});
