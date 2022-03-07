
const express = require('express');
const app = express();

app.use(logger);

app.get("/books", (req, res) => {
    res.send ({route: "/books"});
});

app.get("/libraries", checkPermission, (req, res) => {
    res.send ({route: "/libraries", permission: true});
});

app.get("/authors",checkPermission, (req, res) => {
    res.send ({route: "/authors", permission: true});
});

function logger (req, res, next){
    if(req.path == "/books"){
        console.log("/books");
    }
    else if(req.path == "/libraries"){
        console.log("/libraries");
    }
    else if(req.path == "/authors"){
        console.log("/authors");
    }
    next()
}

function checkPermission(req, res, next){
    next();
}


app.listen(8000, () => {
    console.log("Listening on port 8000");
})