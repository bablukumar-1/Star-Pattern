

// i am write all constructor

import User from "./model/User.model";
import crypto from "crypto";
import nodemailer from 'nodemailer'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

// create userRegister

const userRegister = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            message: 'll filed are required',
            success: false,
        })
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'user All ready exist'
            })
        }
        const user = await User.create({
            name, email, password
        })
        if (!user) {
            return res.status(400).json({
                message: 'All filed are required'
            })
        }
        // token
        const token = crypto.randomBytes(32).toString('hex')
        user.verificationToken = token
        await user.save();
        // send email
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false,
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            }
        })
        const mailOption = {
            from: process.env.MAILTRAT_MAILSENDER,
            to: user.email,
            subject: 'Please verify your email',
            text: `Please follow the following link ${process.env.BASE_URL}/api/v1/users/verify/${token}`
        }
        await transporter.sendMail(mailOption)
        res.status(400).json({
            message: 'User register successful',
            success: true,
        })
    } catch (error) {
        res.status(400).json({
            message: ' All field are required',
            success: true,
        })
    }

}

// user verify
const verifyUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: ' All field are required'
        })
    }
    const user = await User.findOne({ verificationToken: token })

    if (!user) {
        return res.status(400).json({
            message: 'Invalid User'
        })
    }
    user.isVerified = true,
        user.verificationToken = undefined,
        await user.save()

}

// user login

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: 'Invalid User'
        })
    }
    try {
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: 'user Already exist'
            })
        }

        const isMatched =await bcrypt.compare(password, user.password)
        if (!isMatched) {
            return res.status(400).json({
                message: 'username and password is invalid'
            })
        }

        if (!(user.isVerified)) {
            return res.status(400).json({
                message: 'User is not verify'
            })
        }

        // token 
        const token = jwt.sign(
            { id: user._id },
            'shhhhy',
            { expiresIn: '24h' }
        )

        const cookieOption = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        }

         res.cookie("text", token, cookieOption)
        res.status(400).json({
            message: 'login successful',
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        res.status(400).json({
            message: 'invalid user',
            success: false,
        })
    }
}
export { userRegister, verifyUser, login }