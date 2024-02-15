import mongoose from "mongoose";

const {DB_USER,DB_PASSWORD} = process.env;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.5dzq9dn.mongodb.net/interneeWebsite`)
.then(res => console.log("DB connected")).catch(err => console.log(err));

export const db = mongoose.connection;
