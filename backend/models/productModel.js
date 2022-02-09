import mongoose  from "mongoose";

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true},
    rating: { type: Number, required: true},
    comment: { type: String, required: true}
},{
    timeStamps: true // will create createdAt and updatedAt automatically
});

const productSchema = mongoose.Schema({
    user: {
        //this is to know which admin created which products
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'User' //this reference a specific model where we would get this user from to create a relationship between the product and the user
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema], // to have an array of review objects
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    timeStamps: true // will create createdAt and updatedAt automatically
});

const Product = mongoose.model('Product', productSchema); // we want to create the model User from this schema

export default Product;