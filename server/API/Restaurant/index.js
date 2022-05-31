import express from 'express';
import {RestaurantModel} from '../../database/allModels';
import { ValidateRestaurantCity } from '../../validation/restaurant';
import { ValidateRestaurantSearchString } from '../../validation/restaurant';
import { ValidateRestaurantId } from '../../validation/food';
const Router=express.Router();

/*
Route           /restaurant/?city=
Des             Get all the restaurant details based on the city name
Params          none
Access          Public
Method          GET
*/

Router.get('/',async (req,res) => {
    try {
        const {city} = req.query;
        await ValidateRestaurantCity(req.query);
        const restaurants= await RestaurantModel.findOne({city});
        return res.json({restaurants});

    } catch (error) {
        return res.json({error:error.message});
    }
})

/*
Route           /restaurant/:_id
Des             Get individual restaurant details based on id
Params          _id
Access          Public
Method          GET
*/

Router.get('/:_id',async (req,res) => {
    try {
        const {_id}=req.body;
        await ValidateRestaurantId(req.body);
        const restaurant= await RestaurantModel.findById(_id);
        if (!restaurant) {
            return res.status(404).json({ error: "Restaurant Not Found" });
          }
          return res.json({ restaurant });

    } catch (error) {
        return res.json({error:error.message});
    }
});

/*
Route           /restaurant/search
Des             Get restaurant details based on search string
Params          none
Access          Public
Method          GET
*/

Router.get('/search',async (req,res) => {
  try {
      const {searchString}=req.body;
      await ValidateRestaurantSearchString(req.body);
      const restaurants= await RestaurantModel.find({
      name :{ $regex : searchString, $options : "i"},
      });
      if (!restaurants) {
        return res.status(404).json({ error: `${restaurants} Not Found` });
      }
      return res.json({restaurants});

  } catch (error) {
    return res.json({error:error.message});
      
  }
});

export default Router;