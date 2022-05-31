import joi from 'joi';

export const ValidateSignUp= (userData) => {
    const Schema=joi.object({
        fullName: joi.string().required().min(5),
        email: joi.string().email().required(),
        password: joi.string(),
        address: joi
            .array()
            .items(joi.object({ details: joi.string(), for: joi.string() })),
        phoneNumber: joi.number(),
    })
    return Schema.validateAsync(userData);
}

export const ValidateSignIn= (userData) => {
    const Schema=joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
    })
    return Schema.validateAsync(userData); // validateasync does validation in its own way
}