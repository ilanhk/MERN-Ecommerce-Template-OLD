import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async ()=>{
    try{
        //delete everthing from the databases to have a fresh start:
        await Order.deleteMany(); // .deleteMany() would delete everything in that model
        await Product.deleteMany();
        await User.deleteMany();

        //add admin user and his products to database
        const createdUsers = await User.insertMany(users); // .insertMany(users); would insert all the data from users
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map((product)=>{
            return { ...product, user: adminUser };
        });
        await Product.insertMany(sampleProducts);
        console.log('Data Imported!'.green.inverse);
        process.exit();

    } catch (error) {
        console.error(`Error: ${error}`.red.inverse);
        process.exit(1);
    }
}; //this is async becuase we are working with mongoose that always return promises

const removeData = async ()=>{
    try{
        //delete everthing from the databases to have a fresh start:
        await Order.deleteMany(); // .deleteMany() would delete everything in that model
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Removed!'.red.inverse);
        process.exit();

    } catch (error) {
        console.error(`Error: ${error}`.red.inverse);
        process.exit(1);
    }
};

if(process.argv[2] === '-d'){
    removeData();
} else {
    importData();
}
//process.argv[2] means 2nd argument in the terminal