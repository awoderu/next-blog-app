import mongoose from "mongoose"; // connect to mongodb using mongoose module




//connect to Mongo DB(using connection function below)
const connect = async () => {   // create connect function and use async since task may take time
  try { // try to execute this function if something goes wrong give the error
    await mongoose.connect(process.env.MONGO); // try and connect to Mongo db link in env file and wait for itr
  } catch (error) {
    throw new Error("Failed to connect to datbase" );
  }
};

export default connect;




// ${error.message}