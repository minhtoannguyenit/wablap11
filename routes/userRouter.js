const express = require('express');
const users = require('../data/users.json');

const userRouter = express.Router();

userRouter.use(express.json());

userRouter.get('/list', (req, res, next) => {
  res.json(users);
});

userRouter.get('/add', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'user.html'));
});

userRouter.use(express.urlencoded({ extended: true }));
userRouter.post('/save', (req, res, next) => {
  users.push(req.body);
  res.status(201).json(users);
});

module.exports = userRouter;