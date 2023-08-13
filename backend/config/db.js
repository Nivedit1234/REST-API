const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
//const MONGO_URI = process.env.MONGO_URI;
//mongoURI =
//('mongodb+srv://niveditindras95:niv12345@niv-cluster.ouycazj.mongodb.net/mern-app');
const connectDB = async () => {
  // try {
  //   const conn = await mongoose.connect(
  //     `${process.env.MONGO_URI}`,
  //     //'mongodb+srv://niveditindras95:niv12345@niv-cluster.ouycazj.mongodb.net/mern-app',
  //     {
  //       useUnifiedTopology: true,
  //       useNewUrlParser: true,
  //       useCreateIndex: true,
  //     },
  //     () => {
  //       console.log(
  //         `MongoDB connected: ${conn.connection.host}`.cyan.underline
  //       );
  //     }
  //   );
  //   // console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  // } catch (error) {
  //   console.log(error);
  //   process.exit(1);
  // }
  // try {
  //   const con = await mongoose.connect(
  //     process.env.MONGO_URI,
  //     { useNewUrlParser: true, useUnifiedTopology: true },
  //     () => {
  //       //   // await mongoose.connect(url, {
  //       //   //   useNewUrlParser: true,
  //       //   //   useUnifiedTopology: true,
  //       //   //   useCreateIndex: true,
  //       //   //   useFindAndModify: false,
  //       console.log(`MongoDB connected:${con.connection.host}`);
  //     }
  //   );
  //   // console.log('Connected to MongoDB!');
  //   // console.log(`MongoDB connected:${con.connection.host}`);
  // } catch (error) {
  //   console.error(`Error while connecting to MongoDB: `, error.message);
  // }
  // const connectToMongo = () => {
  //   mongoose
  //     .connect(mongoURI)
  //     .then(() => console.log('Connected to mongo Successful'))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // try {
  //   mongoose.set('strictQuery', false);
  //   mongoose.connect(process.env.MONGO_URI);
  //   console.log('Mongo connected');
  // } catch (error) {
  //   console.log(error);
  //   process.exit();
  // }

  mongoose
    .connect(
      'mongodb+srv://niveditindras95:niv12345@niv-cluster.ouycazj.mongodb.net/mern-app',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //mongoose.set('strictQuery', false);
      }
    )
    .then(() => {
      console.log('Connected Successfully');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
