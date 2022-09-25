import server from "../src/model/server.js";

let app = new server();

app.configureCors;
app.midleware;
app.connectDB;
app.start;
