const login = (req , res) =>{
    let {email , password } = req.body;
    if(!email){
      return   res.status(400).json({"message":"Please Enter Your Email Id"})
    }else if(!password){
      return  res.status(400).json({"message":"Please Enter Your Password"})
    }else{
      let user_data = req.body
     return res.status(200).json({"User Login Success" : JSON.stringify(user_data)})
    }
}

module.exports = login