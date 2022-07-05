import passport from "passport";
import bcrypt from 'bcrypt';

import { Strategy as LocalStrategy } from 'passport-local';
import { UserService } from '../index.js';

passport.use(
"login",
new LocalStrategy(
    {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
    },
    async (req, email, password, done) => {
    try {
    const user = await UserService.findUserByEmail(email);
    if(!user) {
        done(null, false);
    } else {
        const passwordCorrect = await bcrypt.compare(password, user.password);
        if(!passwordCorrect){
            done(null, false);
        } else {
            done(null, user);
        }
    }
    } catch (error) {
        done(error);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.email);
});

passport.deserializeUser(async(email, done) => {
    const user = await UserService.findUserByEmail(email);
    done(null, user);
});

export { passport };