const event = require("./event");

const volunteer = require("./volunteer");

const routers = [
   {
      path: "/event",
      hedelar: event,
   },
   {
      path: "/volunteer",
      hedelar: volunteer,
   },
];

module.exports = (app) => {
   routers.forEach((router) => {
      app.use(router.path, router.hedelar);
   });
};
