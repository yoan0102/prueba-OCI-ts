import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    //TODO: remover la url mongo local
    const con = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/oci');
    console.log(`DB connected with HOST: ${con.connection.host} DB: ${con.connection.db.namespace}`);
  } catch (error) {
    console.log(error);
    throw new Error(`DB offline`);
  }
};
