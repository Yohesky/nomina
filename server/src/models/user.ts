import {Schema, model, Document} from "mongoose"
import bcrypt from "bcryptjs"




const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    }
})

userSchema.methods.encryptPass = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)
}

userSchema.methods.verifyPass = async function(password: string): Promise<Boolean> {
    return await bcrypt.compare(password, this.password)
}



export interface IUser extends Document{
    username: string;
    password: string;
    encryptPass(password: string): Promise<string>
    verifyPass(password: string): Promise<Boolean>
}


export default model<IUser>("User", userSchema)