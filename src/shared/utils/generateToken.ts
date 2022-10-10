import jwt from 'jsonwebtoken';

export const generateToken = (id = '') => {
  return new Promise((resolve, reject) => {
    const payload = { id };
    jwt.sign(
           payload,
      process.env.SECRECT_KEY || '*h60u0oZk6oK',
      { expiresIn: '4h' },
      (err, token) => {
        if (err) {
          console.log(err);
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('No se genero un token');
        } else {
          resolve(token);
        }
      }
    );
  });
};
