import jwt from 'jsonwebtoken';
export const generateToken = (payload) => {
    return jwt.sign(payload, 'reetu01@',{ expiresIn: '1h' });
}