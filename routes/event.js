const router = require("express").Router();

const {
   getEvents,
   addEvent,
   deleteEvent,
   searchEvent,
} = require("../controller/eventController");

router.post("/", addEvent);

router.get("/", getEvents);

router.get("/:text", searchEvent);

router.delete("/:id", deleteEvent);

module.exports = router;
