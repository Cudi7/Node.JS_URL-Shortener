import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //object options to avoid warnings in the console
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Not able to connect because of: ${error}`);
    // we want to exit with failure, thats why we put 1
    process.exit(1);
  }
};

export default connectDB;
