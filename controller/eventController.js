const Event = require("../models/Events");
const Volunteer = require("../models/Volunteer");
const { error } = require("../utilities/error");

exports.getEvents = async (req, res) => {
   try {
      const events = await Event.find().sort({ date: -1 });
      if (events) {
         return res.status(200).json(events);
      } else {
         return res.status(404).json({ message: "Event not found" });
      }
   } catch (err) {
      error(res, err);
   }
};

exports.addEvent = async (req, res) => {
   try {
      const { title, description, date, banner } = req.body;
      const event = await Event.findOne({ banner });
      if (!event) {
         const newEvent = new Event({
            title,
            description,
            date,
            banner,
         });
         res.json(newEvent);
         return await newEvent.save();
      }
   } catch (err) {
      error(res, err);
   }
};

exports.deleteEvent = async (req, res) => {
   try {
      await Volunteer.find({ event: req.params.id }).remove();
      await Event.findByIdAndDelete(req.params.id);
      return res.json({ message: "Event deleted" });
   } catch (err) {
      error(res, err);
   }
};

exports.searchEvent = async (req, res) => {
   try {
      const event = await Event.find({ $text: { $search: req.params.text } });
      res.json(event);
   } catch (err) {
      error(res, err);
   }
};
