import jwt from 'jsonwebtoken'; 
//json web token docs: 
//https://jwt.io/ , https://github.com/auth0/node-jsonwebtoken , https://www.npmjs.com/package/jsonwebtoken 

const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d' //30 days
    });
};
//sign 1st arg is the payload, 2nd is a random made secret key, 3rd is an options object

export default generateToken