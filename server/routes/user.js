import express from 'express';
import bcrypt from 'bcrypt';
import {  User } from '../models/user';

const router = express.Router();

router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  User.findOne({ email })
})

export { router as UserRouter };