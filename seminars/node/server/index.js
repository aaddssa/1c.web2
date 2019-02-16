let express = require("express");
let cors = require("cors");
let app = express();
let mongoClient = require("mongodb").MongoClient;
let app = express();

app.use(cors());
app.use(express.static(".../client"));

app.get("/", function(request, response) {
    let name = request.query.name;
    let mood = request.query.mood;
    response.send("Hello, " + name + "! I am " + mood + " too");
});

mongoClient.connect("mongodb://localhost", function(err, client){
    console.log(err);
    let sandbox = client.db("sandbox");
    let humans = sandbox.collection("humans");

    humans.insert({
        name: "Алексей",
        age: 18
    }, function(err, result) {
        console.log(result);
        client.close();
    });
});

app.listen(591);