const { json } = require("express");
const { parseAsync } = require("../validations/signup-validation")

const signupMiddleware = (schema) => async (req, res, next) => {
try {
const parseBody = await schema.parseAsync(req.body);
req.body = parseBody
    next()
} catch (error) {
    // console.log(error.errors[0].message)
    // res.status(400).json(error.errors[0].message)

    const error_message={
        status:400,
        err:error.errors[0].message,
    }
    next(JSON.stringify(error_message))
}

}

module.exports = signupMiddleware