import mongoose from 'mongoose'; // docs: https://mongoosejs.com/docs/guides.html

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true //all 2 of these are options in mongoose
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1); //this will exit with failure since it has exit(1)
    }
};

export default connectDB;