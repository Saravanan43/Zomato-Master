import  express  from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {UserModel} from "../../database/user/index";
import passport from "passport";
import { ValidateSignUp,ValidateSignIn } from "../../validation/auth";

const Router=express.Router();

Router.post("/signup", async (req, res) => {
    try {
     await ValidateSignUp(req.body.credentials);
     //console.log(credentials);
      await UserModel.findByEmailAndPhoneNumber(req.body.credentials);
      const newUser = await UserModel.create(req.body.credentials);
      const token = newUser.generateJwtToken();
      return res.status(200).json({ token, status: "success" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

Router.post("/signin", async(req,res) => {
    try {
        
     //   await ValidateSignIn(req.body.credentials);
        
        const user= await UserModel.findByEmailAndPassword(req.body.credentials);

        const token=user.generateJwtToken();

        return res.status(200).json({token,msg:"success"});

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});

Router.get("/google", passport.authenticate("google",{
    // google takes the profile and email
    scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
    ],
})
);

Router.get("/google/callback", passport.authenticate("google",{failureRedirect: "/"}),
(req,res) => {
    return res.json({token:req.session.passport.user});
}
);


export default Router;