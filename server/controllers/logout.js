const logout=async(req,res,next)=>{
    res.clearCookie('connect.sid')
    res.clearCookie('token')
    res.status(200).json({message:'success',status:true})
}

module.exports=logout