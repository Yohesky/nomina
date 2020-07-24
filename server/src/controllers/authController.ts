import {Request, Response} from 'express'
import User, {IUser} from "../models/user" 
import jwt from "jsonwebtoken"


function createToken(user: IUser){
  return jwt.sign({id: user.id, username: user.username}, process.env.TOKEN_SECRET || "tokenaux")
}

export const signup = async (req: Request,res: Response) => {
  if(!req.body.username || !req.body.password){
    return res.status(400).json({msg: "Por favor ingrese todos los campos requeridos"})
  }
  
  const userFound = await User.findOne({username: req.body.username})

  if(userFound){
    res.status(400).json({msg: "El username de esta persona ya existe"})
  }

  const {username, password} = req.body
  const user: IUser = new User({
    username,
    password
  })

  user.password = await user.encryptPass(password)

  const savedUser = await user.save()

  res.json(savedUser)
}

export const signin = async (req: Request,res: Response) => {
  if(!req.body.username || !req.body.password){
    return res.status(400).json({msg: "Por favor ingrese todos los campos requeridos"})
  }

  const user = await User.findOne({username: req.body.username})

  if(!user){
    return res.status(400).json({msg: "Este username no existe"})
  }

  const isMatch = await user.verifyPass(req.body.password)

  if(isMatch){
    return res.status(200).json({token: createToken(user)})
  }

  return res.status(400).json({msg: "Credenciales invalidas"})

}

