import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before saving
        const hashPassword = await bcryptjs.hash(password, 10);

        // Create and save the new user
        const createdUser = new User({
            fullname,
            email,
            password: hashPassword, // Pass the hashed password as 'password'
        });

        await createdUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch =await  bcryptjs.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({message:"Invalid username or password"})
        }
        else {
            res.status(200).json({
                message: "User logged in successfully",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email:user.email,
                },

            });
        }
    } catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}