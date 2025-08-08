const jwt=require('jsonwebtoken')

const generateToken=(email)=>{
    const accessToken=jwt.sign({email:email},process.env.JWT_SECRET,{expiresIn:'7d'})
    return accessToken
}

module.exports=generateToken