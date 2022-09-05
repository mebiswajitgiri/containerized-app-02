const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h2> Its Biswajit, How Are you ? </h2>");f 
});
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to port ${port}`));
