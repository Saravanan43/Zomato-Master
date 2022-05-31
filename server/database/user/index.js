import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema= new mongoose.Schema({
   fullName:{type:String,required:true},
   email:{type:String,required:true},
   password:{type:String},
   address:[{details:{type:String},for:{type:String}}],
   phoneNumber:[{type:Number}],

},{
    timestamps:true
}
);

// Generate JwT for the particular id
UserSchema.methods.generateJwtToken = function(){
    return jwt.sign({user: this._id.toString()},"ZomatoAPP"); 
}

UserSchema.statics.findByEmailAndPhoneNumber= async({email,phoneNumber}) =>{
        const checkUserEmail= await UserModel.findOne({email});
        const checkUserNumber= await UserModel.findOne({phoneNumber});

        //If email and num exists
        if(checkUserEmail || checkUserNumber)
        throw new Error("User already Exists");
        
        return false;// Not present in db
}
// hashing the pswd before saving the data
UserSchema.pre("save",function(next){
    //credentials are in this
    const user =this;
    // If no pswd entered not encryt
    if(!user.isModified("password")) return next();
    
    bcrypt.genSalt(8,(error,salt)=>{
        if(error)  return next(error);

        //hash the pswd
        bcrypt.hash(user.password,salt,(error,hash) =>{
            if(error)  return next(error);
            user.password=hash;
            return next();
        });
    });
});

UserSchema.statics.findByEmailAndPassword= async({email,password}) => {
    const user= await UserModel.findOne({email});
    if(!user) throw new Error("User Not exists");

    const pswdMatch = await bcrypt.compare(password,user.password);

    if(!pswdMatch) throw new Error("Password does not match");

    return user;

}

export const UserModel=mongoose.model('Users',UserSchema);