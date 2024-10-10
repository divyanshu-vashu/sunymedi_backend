const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const aliceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: Number, default: 0 },
    alice: { type: String, default: '0' },
    transactions: { type: [Date], default: [] }, 
});

aliceSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, 'mysecretkey', {
        expiresIn: "7d",
    });
    return token;
};

const Alice = mongoose.model("Alice", aliceSchema); 

const validate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        mobile: Joi.number().integer().default(0).label("Mobile"),
        alice: Joi.string().default('0').label("Alice"),
        transactions: Joi.array().items(Joi.date()).default([]).label("Transactions"), 
    });
    return schema.validate(data);
};

module.exports = { Alice, validate };
