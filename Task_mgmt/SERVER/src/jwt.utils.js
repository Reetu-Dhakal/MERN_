import jwt from 'jsonwebtoken'

export const generateToken = (payload) => {

    return jwt.sign(payload,'dgyhgdshdysfgdyudgashdf',{expiresIn: '7d'})

}
export const verifyToken = () => {
    
    return jwt.verify(token, 'gyhgdshdysfgdyudgashdf')
}