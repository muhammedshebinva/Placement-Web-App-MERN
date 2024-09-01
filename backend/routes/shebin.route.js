import express from "express";
import { User } from "../models/user.model";
//import { getStudents } from "../controllers/admin.controler.js";

const router = express.Router();

//router.route("/students").get(getStudents)

router.get('/students', async (req, res) => {
    try {
      const students = await User.find({ role: 'student' });
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: error.message   
   });
    }
  });
export default router;