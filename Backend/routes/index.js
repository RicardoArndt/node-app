const fs = require('fs');
const path = require('path');

const routesDefineds = [];
const registerRoutes = (app, server) => { 
    fs.readdir(path.join(__dirname), (err, files) => {
        if (err) {
            server.close();
            return console.error(err);
        }

        files.forEach(fileName => {
            if (/((routes)|(route)).js$/.test(fileName)) {
                const route = `/${fileName.split('.', 1)[0]}`;
                const controller = require(`./${fileName}`);

                routesDefineds.push({
                    group: route,
                    routes: []
                });

                controller.stack.forEach(s => {
                    routesDefineds.find(r => r.group === route).routes.push({
                        method: s.route.method,
                        path: s.route.path,
                        keys: s.route.keys,
                        params: s.route.params
                    });
                });

                app.use(route, controller);
            }
        });
    });
}

module.exports = {
    registerRoutes,
    routesDefineds
}