import joi from "joi";

export const ValidateRestaurantCity = (data) =>{
    const Schema= joi.object(
        {
            city:joi.object.required(),
        }
    );
    return Schema.validateAsync(data);
}

export const ValidateRestaurantSearchString = (data) =>{
    const Schema= joi.object(
        {
            searchString:joi.object.required(),
        }
    );
    return Schema.validateAsync(data);
}

