/* eslint-disable max-len */
/* eslint-disable consistent-return */
const JWTService = require('../services/auth.service');
const User = require('../models/User');
// usually: "Authorization: Bearer [token]" or "token: [token]"
module.exports = {
  private: (req, res, next) => {
    let tokenToVerify;

    if (req.header('Authorization')) {
      const parts = req.header('Authorization').split(' ');

      if (parts.length === 2) {
        const scheme = parts[0];
        const credentials = parts[1];

        if (/^Bearer$/.test(scheme)) {
          tokenToVerify = credentials;
        } else {
          return res.status(401).json({ msg: 'Format for Authorization: Bearer [token]' });
        }
      } else {
        return res.status(401).json({ msg: 'Format for Authorization: Bearer [token]' });
      }
    } else if (req.body.token) {
      tokenToVerify = req.body.token;
      delete req.query.token;
    } else {
      return res.status(401).json({ msg: 'No Authorization was found' });
    }

    return JWTService().verify(tokenToVerify, (err, thisToken) => {
      if (err) return res.status(401).json({ err });
      req.token = thisToken;
      return next();
    });
  },
  admin: (req, res, next) => {
    let tokenToVerify;

    if (req.header('Authorization')) {
      const parts = req.header('Authorization').split(' ');
      if (parts.length === 2) {
        const scheme = parts[0];
        const credentials = parts[1];

        if (/^Bearer$/.test(scheme)) {
          tokenToVerify = credentials;
        } else {
          return res.status(401).json({ msg: 'Format for Authorization: Bearer [token]' });
        }
      } else {
        return res.status(401).json({ msg: 'Format for Authorization: Bearer [token]' });
      }
    } else if (req.body.token) {
      tokenToVerify = req.body.token;
      delete req.query.token;
    } else {
      return res.status(401).json({ msg: 'No Authorization was found' });
    }
    User.findOne({ where: { email: req.body.email } }).then((user) => JWTService().verify(tokenToVerify, (err, thisToken) => {
      if (err) {
        return res.status(401).json({ err });
      } else if (user.rol !== 1) {
        return res.status(401).json({ msg: 'No admin Authorization was found' });
      }
      req.token = thisToken;
      return next();
    }));
  },
};
