import jwt from 'jsonwebtoken'

const authUser = async(req, res, next) => {
    const {token} = req.headers

    if (!token) {
        return res.json({success:false, message:"Not Authorized"})
    }

    try {
        
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = decodedToken.id
        next()

    } catch (error) {
        console.log(error);
        res.json({success:false})
        
    }
}

export default authUser