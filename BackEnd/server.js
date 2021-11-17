const express = require('express')
const app = express()
const port = 4000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//MY Db connection
const myConnectionString = "mongodb+srv://admin:Zqsdt9$8@cluster0.onmwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//connect to mongoose
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//schema
const Schema = mongoose.Schema;

//Movie Schema
var movieSchema = new Schema({
    title: String,
    year: String,
    poster: String
});

//Model and mongo collection - movie
var MovieModel = mongoose.model("movie", movieSchema);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Cross-Origin Resource Sharing - to allow 2 domains to interact
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/api/movies', (req, res) => {
    //Finds all documents
    MovieModel.find((err, data) => {
        res.json(data);
    })
    //Send JSON Data
    // res.status(200).json({
    // message: "Everything is ok",
    // myMovies: movies})

})

app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id);
    //By ID
    MovieModel.findById(req.params.id, (err, data) => {
        res.json(data)
    })
});

app.put('/api/movies/:id', (req, res) => {
    console.log("Updating " + req.params.id);

    MovieModel.findByIdAndUpdate(req.params.id, req.body, { new:true },
        (err, data) => {
            res.send(data);
        })
})


app.post('/api/movies', (req, res) => {
    //Log data
    console.log(req.body);
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);

    //Send to DB
    MovieModel.create({
        title: req.body.Title,
        year: req.body.Year,
        poster: req.body.Poster
    })

    //Stop Dups, by sending back to client
    res.send("Item Added");
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
