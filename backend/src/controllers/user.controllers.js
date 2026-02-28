const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { userName, email, password } = req.body;

  const isUserExist = await userModel.findOne({
    $or: [{ userName }, { email }],
  });

  if (isUserExist) {
    return res.status(400).json({
      message: "user already exist",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    userName,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      userName: user.userName,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "3d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user registered successfully",
    user,
    token,
  });
}

async function loginControllers(req, res) {
  const { userName, email, password } = req.body;
  const user = await userModel
    .findOne({
      $or: [{ userName }, { email }],
    })
    .select("+password");

  if (!user) {
    return res.status(400).json({
      message: "invalid credentials",
    });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return res.status(400).json({
      message: "invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      ifd: user._id,
      userName: user.userName,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "3d",
    },
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "user logged in successfully",
    user,
    token,
  });
}

module.exports = {
  registerController,
  loginControllers,
};
