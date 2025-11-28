import User from "../models/user.js";

export const postUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  try {
    const savedUser = await newUser.save(); // Wait for save to complete
    res.status(200).json({
      msg: "User created successfully",
      id: savedUser._id, // 👈 Return the _id here
    });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ msg: "Error creating user" });
  }
};
