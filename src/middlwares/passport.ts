import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../config/config";
import User from "../models/user.model";
const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}

export default new Strategy(opts, async (payload, done) => {
    const user = await User.findById(payload.id)
    user ? done(null, user) : done(null, false)
})