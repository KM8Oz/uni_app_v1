const jwt = require('jsonwebtoken');

const secret = 'gaklsvd;ofag;ofbj78f231f;ofh19p8g1pfb1';

const authService = () => {
  const issue = (payload) => { console.log('paload from jwt:', payload); return jwt.sign(payload, secret, { expiresIn: 10800 }); };
  const verify = (token, cb) => jwt.verify(token, secret, {}, cb);

  return {
    issue,
    verify,
  };
};

module.exports = authService;
