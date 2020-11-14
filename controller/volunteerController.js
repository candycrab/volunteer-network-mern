const Volunteer = require("../models/Volunteer");

const { error } = require("../utilities/error");
const Events = require("../models/Events");

exports.getUser = async (req, res) => {
   try {
      const volunteers = await Volunteer.find()
         .sort({ date: -1 })
         .populate("event")
         .exec();
      if (volunteers.length !== 0) {
         return res.status(200).json(volunteers);
      } else {
         return res.status(404).json({ message: "Volunteer is empty" });
      }
   } catch (err) {
      error(res, err);
   }
};

exports.addUser = async (req, res) => {
   try {
      const { name, email, description, date } = req.body;
      const event = await Events.findOne({ _id: req.params.id });
      if (!event) {
         return res.status(404).json({ message: "Your Events not found" });
      }
      let volunteer = await Volunteer.find({ email: email });

      const ev = volunteer.map((vo) => vo.event && vo.event == req.params.id);

      if (ev.includes(true)) {
         return res.json({ message: "Your event already added" });
      }
      const newVolunteer = new Volunteer({
         name,
         email,
         description,
         date,
         event: req.params.id,
      });
      await newVolunteer.save();

      volunteer = await Volunteer.findById(newVolunteer._id)
         .populate("event")
         .exec();
      return res.status(200).json(volunteer);
   } catch (err) {
      error(res, err);
   }
};

exports.deleteVolunteer = async (req, res) => {
   try {
      const volunteer = await Volunteer.findOne({ _id: req.params.id });

      if (!volunteer) {
         return res.status(404).json({ message: "Your Volunteer not found" });
      }

      await Volunteer.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Delete volunteer" });
   } catch (err) {
      error(res, err);
   }
};

exports.getEventByUser = async (req, res) => {
   try {
      const volunteers = await Volunteer.find({ email: req.params.email })
         .sort({ date: -1 })
         .populate("event")
         .exec();
      if (volunteers.length !== 0) {
         return res.status(200).json(volunteers);
      } else {
         return res.status(404).json({ message: "Volunteer is empty" });
      }
   } catch (err) {
      err(res, err);
   }
};
