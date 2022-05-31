require("dotenv").config();// config the dotenv
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import session  from "express-session";
//congig
import googleAuthConfig from './config/google.config';

//Routes
import Auth from "./API/Auth/index";
import Restaurant from "./API/Restaurant/index";
import Food from "./API/Food/index";
import Menu from "./API/Menu/index";
import Image from "./API/Image/index";
import Order from "./API/Orders/index";
import Review from "./API/Reviews/index";
import User from "./API/User/index";
//Db connection
import ConnectDB from "./database/connection";

const zomato=express();

//google config
googleAuthConfig(passport);

zomato.use(session({
  secret: "secret",
  resave: false ,
  saveUninitialized: true ,
}))

zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(cors());
zomato.use(helmet());
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.use('/auth',Auth);
zomato.use('/restaurant',Restaurant);
zomato.use('/food',Food);
zomato.use('/menu',Menu);
zomato.use('/image',Image);
zomato.use('/review',Review);
zomato.use('/user',User);
zomato.use('/order',Order);


zomato.get("/",(req,res) => {
    return res.json({Message:"Running"});
})

zomato.listen(4000,ConnectDB()
.then(() => console.log("Server is up and running"))
.catch((error) => {
  console.log(error);
  console.log("Server is running, but database connection failed ...");
})
);