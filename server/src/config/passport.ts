import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt"
import User from "../models/user"

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET
}


export default new Strategy(opts, async (payload, done) => {
    try {
        const user = await User.findById(payload.id)
        
        
        if (user) {
            return done(null, user.id)
        }

        return done(null, false)

    } catch (error) {
        console.log(error);

    }

    
})

