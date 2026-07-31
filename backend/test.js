import mongoose from "mongoose";
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

try{
    await mongoose.connect("mongodb+srv://brbaljinder_db_user:9QlDKxW1EC0Cp1z1@cluster0.llfbxrm.mongodb.net/");
    console.log("connected");
}
catch(er){
    console.log(er);
}