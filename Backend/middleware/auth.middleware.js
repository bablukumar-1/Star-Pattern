import jwt from 'jsonwebtoken'

export const isLoggedIn = async (req, res, next) => {
    try {
      
        console.log(req.cookies)
        let token = req.cookies.token || "";
        console.log("token :", token)
        if (!token) {
            return res.status(401).json({
                message: 'Authentication is failed',
                success: false
            })
        }

        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log('decodeValue: ',decode)
        req.user = decode;
        next()

    } catch (error) {
        console.log('Auth middleware is failure')
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })

    }
}