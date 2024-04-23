import express from 'express';
import bcrypt from 'bcrypt';
import {  User } from '../models/user';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const user = User.findOne({ email })
  if (user) {
    return res.json({ message: 'User already exists' });
  }
  const hashpassword = await bcrypt.hash(password, 10 )
})

export { router as UserRouter };