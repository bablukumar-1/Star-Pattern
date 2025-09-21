import User from "../model/User.model.js";
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

// register user only
const registerUser = async (req, res) => {
    // get data
    //validate
    // check if user already exists
    // create a user in database
    //create a verification token
    // save token in database
    // send token as email to user
    // send success status to user
    // res.send('User register !');

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            message: 'All field are required !'
        })
    }
    // console.log(name,email,password)

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exist!"
            })
        }
        const user = await User.create({
            name,
            email,
            password
        })
        // console.log(user)

        if (!user) {
            return res.status(404).json({
                message: "User not register!"
            })
        }

        const token = crypto.randomBytes(32).toString('hex')
        // console.log(token)
        user.verificationToken = token
        await user.save()


        // send email

        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false,
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            }
        });

        const mailOption = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: "Verify your Email.",
            text: `Please click on the following link ! ${process.env.BASE_URL}/api/v1/users/verify/${token}`, // plain‑text body
        };

        transporter.sendMail(mailOption)
        res.status(201).json({
            message: "User register successfully",
            success: true
        });

    } catch (error) {
        res.status(400).json({
            message: "User not register ",
            success: false,
            error: error
        });
    }
}


const verifyUser = async (req, res) => {
    // get token from url
    // validate
    // find user based on token
    // if not
    // set verify field to true
    // remove verification token
    // save
    // return response
    const { token } = req.params
    // console.log(token)
    if (!token) {
        return res.status(400).json({
            message: " Invalid token !"
        })
    }

    const user = await User.findOne({ verificationToken: token })

    if (!user) {
        return res.status(400).json({
            message: "Invalid token !",
            success: true
        })
    }

    user.isVerified = true
    user.verificationToken = undefined
    await user.save()
    res.status(200).json({
        message: 'user verify successful'
    })

}

// user login

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: 'All field are required !'
        })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "Invalid Email and password !"
            })
        }
        const isMatched = await bcrypt.compare(password, user.password)
        console.log(isMatched)
        if (!isMatched) {
            return res.status(400).json({
                message: "Invalid Email and password !"
            })
        }
        //  user.isVerified = true
        if (!(user.isVerified)) {
            return res.status(400).json({
                message: 'user is not verified',
                success: false
            })
        }
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: process.env.JWT_EXPIRE_TIME,
            }
        )
        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        }
        res.cookie("token", token, cookieOptions);
        res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                role: user.role
            }
        });
    } catch (error) {
        res.status(400).json({
            message: "User not register ",
            success: false,
            error: error
        });
    }
}

//************* get profile ********* */

const getMe = async (req, res) => {
    try {
        // console.log("reached at profile")
        // all value are coming fom cookies not a database
        const user = await User.findById(req.user.id).select('-password -createdAt -updatedAt')
        console.log("this is user Id: ", user)
        if (!user) {
            return res.status(400).json({
                message: 'User not found',
                success: false
            })
        }
        res.status(200).json({
            success: true,
            message: "Loaded user profile",
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Internal error Occured",
        }
}

    // //************* Log out ********* */

    const logoutUser = async (req, res) => {
        try {
            res.cookie('token', '', {
                expires: new Date(0)
            })
            res.status(200).json({
                success: true,
                message: 'Logged out successfully'
            })
            console.log('cookie ', req.cookie)
        } catch (error) {
            res.status(200).json({
                success: false,
                message: 'user not logout'
            })
        }
    }

    // //************* forgot password ********* */

    const forgotPassword = async (req, res) => {
        try {
            //** Algorithms  */
            // get email
            //find user based on email
            //reset password token + reset Expire Date.now()+10*60*1000
            // user.save()
            //send email +>design url

            const { email } = req.body;
            if (!email) {
                return res.status(400).json({
                    message: 'Invalid User',
                    success: false
                })
            }
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({
                    message: 'Invalid User',
                    success: false,
                })
            }
            // generate reset token
            const resetToken = crypto.randomBytes(32).toString("hex");
            // Hash token before saving (for security)
            // const hashedToken = crypto
            //     .createHash("sha256")
            //     .update(resetToken)
            //     .digest("hex");

            // Save token + expiry in user document
            user.resetPasswordToken = resetToken;
            user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
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
            });

            const mailOption = {
                from: process.env.MAILTRAP_SENDEREMAIL,
                to: user.email,
                subject: "Verify your Email.",
                text: `Please click on the following link ! ${process.env.BASE_URL}/api/v1/users/verify/${token}`, // plain‑text body
            };

           await transporter.sendMail(mailOption)
           
            res.status(200).json({
                success: true,
                message: `Password reset link sent to ${user.email}`,
            });

        } catch (error) {

            // Clean reset token if something fails

            res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    }
    //************* reset password ********* */


    const resetPassword = async (req, res) => {
        const { token } = req.params;
        const { email, newPassword } = req.body;

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired token",
            });
        }

        if (!email || !newPassword) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        try {
            const user = await User.findOne({
                resetPasswordToken: token,
                resetPasswordExpiry: { $gt: Date.now() },
            });
            console.log(user);
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: "User not found!",
                });
            }

            user.password = newPassword;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
           await user.save();

            res.status(201).json({
                success: true,
                message: "Password reset Successful",
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                success: false,
                messsage: "Internall error Occcured",
            });
        }
    };
    export { registerUser, verifyUser, login, getMe, logoutUser, forgotPassword, resetPassword }
