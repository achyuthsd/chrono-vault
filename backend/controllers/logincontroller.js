import User from "../models/user.js";

export const getUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.json({ msg: "No such user exists" ,userId:""});
    }

    if (user.password !== password) {
      return res.json({ msg: "Check your password & Try again",userId:"" });
    }

    // ✅ Return success message + user id
    res.json({
      msg: "Logged in successfully",
      userId: user._id,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

