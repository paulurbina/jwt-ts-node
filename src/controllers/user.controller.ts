import { Request, Response } from "express";
import User, { IUser } from "../models/user.model";
import jwt from "jsonwebtoken";
import config from "../config/config";

function createToken (user: IUser) {
    return jwt.sign({id: user.id, email: user.email}, config.jwtSecret, {
        expiresIn: 86400
    })
}

export const signUp  = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.email || !req.body.password) res.status(400).json({
        msg: 'Please, send your email and password!'
    })

    const user = await User.findOne({email: req.body.email})

    if (!user) res.status(400).json({msg: 'the user no found!'})
    const newUser = new User(req.body)
    await newUser.save()
    return res.status(201).json({msg: 'The user register!'})
}

export const signIn  = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.email || !req.body.password) res.status(400).json({
        msg: 'Please, send your email and password!'
    })
    const user = await User.findOne({email: req.body.email})
    if (!user) res.status(400).json({msg: 'the user no found!'})
    const isMatch = await user.comparePassword(req.body.password)
    if (isMatch) res.status(400).json({ token: createToken(user) })

    return res.status(400).json({ msg: 'Email or password is incorrect'})
}