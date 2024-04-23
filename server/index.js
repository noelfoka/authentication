import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { UserRouter } from './routes/user';

const app = express();
app.use(express.json());
app.use('/auth', UserRouter);

mongoose.connect('mongodb://localhost127.0.0.1:27017/authentication');

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});