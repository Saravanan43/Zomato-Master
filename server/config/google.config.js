import passport from 'passport';
import googleOAuth from 'passport-google-oauth20';
import { UserModel } from '../database/allModels';

const GoogleStrategy=googleOAuth.Strategy;

export default (passport) => {
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "http://localhost:4000/auth/google/callback"
  },
  // after authenticating with google wil get these values
  async(accessToken, refreshToken, profile, done) =>{
    // Creating a new user object
    const newUser = {
        // getting details from google
        fullName:profile.displayName,
        email:profile.emails[0].value,
        profilePic:profile.photos[0].value
    };

    try {
        // check if the user exixts
        const user = await UserModel.findOne({email:newUser.email});

        if(user){
            const token=user.generateJwtToken();
            done(null,{user,token});
        }
        else{
            const user = await UserModel.create(newUser);
            const token=user.generateJwtToken();
            done(null,{user,token});
        }
    } catch (error) {
        done(error,null);
    }
   }
 )
)
 passport.serializeUser((userdata,done) => done(null,{...userdata}));
 passport.deserializeUser((id, done) => done(null, id));

};