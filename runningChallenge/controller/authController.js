// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { name, birthdate, role } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { name, birthdate } });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = await User.create({ name, birthdate, role });

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.signin = async (req, res) => {
  try {
    const { name, birthdate } = req.body;

    // Check if the user exists
    const user = await User.findOne({ where: { name } });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Check the birthdate
    if (user.birthdate !== birthdate) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id, role: user.role }, 'your_secret_key', {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.signout = (req, res) => {
  try {
    // 로그아웃은 클라이언트에서 토큰을 삭제하는 방식으로 구현됩니다.
    // 클라이언트 측에서 인증 토큰을 삭제하도록 처리해야 합니다.
    // 토큰 무효화 방식은 클라이언트 사이드에서 구현하는 것이므로 백엔드에서 토큰만 검증하고, 실제로 토큰을 무효화시키는 로직은 클라이언트에서 수행합니다.
    // 즉, 서버에서는 클라이언트가 보낸 토큰을 검증만 하고, 클라이언트에서 토큰을 삭제하여 로그아웃 처리를 하도록 합니다.
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
