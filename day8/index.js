import { MongoClient } from 'mongodb';

import 'dotenv/config';

const url = process.env.MONGODB_URI;

const client = new MongoClient(ulr);

async function connectToMongo() {
  try {
    await client.connect(); 
    console.log('✅ Connected to MongoDB');
    const db = client.db("school");

    const studnts = db.collection("studnts")

    studnts.insertOne({ name: "ahmed", age: 21, gpa: 3.5 });

    studnts.insertMany([{ name: "mohamed", age: 22, gpa: 3.7 }, { name: "sara", age: 20, gpa: 3.9 }]);

    const allStudnts = await studnts.find().toArray();
    console.log(allStudnts);

    const studnsSenior = await studnts.find({ age: { $gt: 21 } }).toArray();
    console.log(studnsSenior);

    const studnsJonior = await studnts.find({ age: { $lte: 21 } }).toArray();
    console.log(studnsJonior);

    await studnts.updateOne({ name: "mostafa", $set: { age: 21 } });
    console.log(await studnts.find().toArray());

    await studnts.deleteOne({ name: "sara" });
    console.log(await studnts.find().toArray());
    await client.close();
  } catch (error) {
    console.log('❌ Connection failed:', error);
  }
}
connectToMongo();

