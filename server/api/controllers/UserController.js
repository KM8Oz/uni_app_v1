/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const User = require('../models/User');
const News = require('../models/News');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');

const UserController = () => {
  const register = async (req, res) => {
    const { body } = req;

    if (body.password === body.password2) {
      try {
        const user = await User.create({
          email: body.email,
          password: body.password,
          username: body.username,
          is_student: body.is_student,
        });
        const token = authService().issue({ id: user.id });

        return res.status(200).json({ token, user });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Passwords don\'t match' });
  };
  const changeRole = async (req, res) => {
    const { body } = req;

    try {
      const updated = await User.update({
        rol: body.rol === 1 ? 1 : 0,
      }, {
        where: {
          email: body.email,
        },
      });
      // .then((result) => {
      // }).catch((err) => {
      //   res.status(500).json({ msg: 'Internal server error', err });
      // });
      res.status(200).json({ done: true, reason: updated });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
    return res.status(500).json({ msg: 'Internal server error' });
  };

  const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    if (email && password) {
      try {
        const user = await User
          .findOne({
            where: {
              email,
            },
          });

        if (!user) {
          return res.status(400).json({ msg: 'Bad Request: User not found' });
        }

        if (bcryptService().comparePassword(password, user.password)) {
          const token = authService().issue({ id: user.id });

          return res.status(200).json({ token, user });
        }

        return res.status(401).json({ msg: 'Unauthorized' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };

  const validate = (req, res) => {
    const { token } = req.body;

    authService().verify(token, (err) => {
      if (err) {
        return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
      }

      return res.status(200).json({ isvalid: true });
    });
  };

  const getAll = async (req, res) => {
    try {
      const users = await User.findAll();

      return res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };
  const getAllNews = async (req, res) => {
    try {
      const news = await News.findAll();

      return res.status(200).json({ news });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };
  const postNews = async (req, res) => {
    const { cover, title, body } = req.body;
    try {
      const news = await News.create({
        cover,
        title,
        body,
      });
      return res.status(200).json({ news });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };
  const deletePost = async (req, res) => {
    const { id } = req.body;
    try {
      const news = await News.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json({ news });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    changeRole,
    register,
    login,
    validate,
    getAll,
    getAllNews,
    postNews,
    deletePost,
  };
};

module.exports = UserController;
