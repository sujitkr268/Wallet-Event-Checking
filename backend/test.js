const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://sujitkrishna2006_db_user:<db_password>@cluster0.ep68dsi.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected successfully!");
    await client.close();
  } catch (err) {
    console.error(err);
  }
}

run();