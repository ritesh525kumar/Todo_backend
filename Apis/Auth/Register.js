const register = (req , res)=>{
    let {email , password , name} = req.body

    if(!email || !password || !name){
        return res.status(400).json({"message":"email , password and name is required"})
    }else{
        return res.status(400).json({"User Register Success": JSON.stringify(req.body)})
    }
}



module.exports = register