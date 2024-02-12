const { json } = require("express");
const { parseAsync } = require("../validations/signup-validation")

const validationiddleware = (schema) => async (req, res, next) => {
try {
const parseBody = await schema.parseAsync(req.body);
req.body = parseBody
    next()
} catch (error) {

    const err={
        status:400,
        error_message: error.errors[0].message
    }
    next(err)
}

}

module.exports = validationiddleware