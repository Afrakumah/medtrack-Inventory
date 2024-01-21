import mongoose from "mongoose";
import { Schema } from "mongoose";

const pharmacySchema = new Schema({
    drugName: {
        type: String,
        required: true
    },

    drugDesc: {
        type: String,
        required: true
    },

    unitPrice: {
        type: String,
        required: true
    },

    drugCode: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
});

const pharmacy = mongoose.model('pharmacy', pharmacySchema)

export default pharmacy