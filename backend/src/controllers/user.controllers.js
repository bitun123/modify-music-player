const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist.model");
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
      id: user._id,
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

async function getAllUsersControllers(req, res) {
  const user = await userModel.findById(req.user.id);
  res.status(200).json({
    message: "all users fetched successfully",
    user,
  });
}

async function logoutControllers(req, res) {
  const token = req.cookies.token;
  await blacklistModel.create({
    token,
  });

  res.clearCookie("token");

  res.status(201).json({
    message: "user logged out successfully",
    token,
  });
}

module.exports = {
  registerController,
  loginControllers,
  getAllUsersControllers,
  logoutControllers,
};
