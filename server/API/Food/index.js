import express from 'express';
import {FoodModel} from '../../database/allModels';
import { ValidateRestaurantId, Validatecategory } from '../../validation/food';
const Router=express.Router();

/*
Route           /food/:_id
Des             Get specific food
Params          _id
Access          Public
Method          GET
*/

Router.get('/:_id',async(req,res) => {
     
     try {
         const {_id}=req.body;
         const food = await FoodModel.find(_id);
         return res.json({food});

     } catch (error) {
         res.json({error:error.message});
     }
});

/*
Route           /food/r/:_id
Des             Get all food based on particular restaurant
Params          id
Access          Public
Method          GET
*/
Router.get("/r/:_id", async (req, res) => {
    try {

      
      const { _id } = req.params;
      await ValidateRestaurantId(_id);
      const foods = await FoodModel.find({ restaurant: _id });
  
      return res.json({ foods });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

/*
Route           /food/c/:category
Des             Get all food based on particular category
Params          category
Access          Public
Method          GET
*/
Router.get("/c/:category", async (req, res) => {
    try {
      const { category } = req.params;
      await Validatecategory(category);
      const foods = await FoodModel.find({
        category: { $regex: category, $options: "i" },
      });
  
      return res.json({ foods });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  export default Router;