import { User } from "../models/user.model"



export const getStudents = async (req,res)=>{
    try{

        const students = await User.find({ role: 'student' });
        res.json(students)

    }catch(error){
        console.log("get Controler error", error)
    }
}