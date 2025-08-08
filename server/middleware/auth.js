const jwt=require('jsonwebtoken')

const auth=(req,res,next)=>{
    try {
        const accessToken=req.cookies.token
        if(!accessToken){
            const error=new Error('unauthorized')
            error.statusCode=403
            throw error
        }
        jwt.verify(accessToken,process.env.JWT_SECRET,(error,decode)=>{
            if(error){
                const error=new Error("unauthorized")
                error.statusCode=403
            }else{
                req.email=decode.email
            }
        })
        next()
    } catch (error) {
        next(error)
    }
}

module.exports=auth