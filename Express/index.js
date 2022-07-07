const express = require("express")

const app = express();

app.get('/', (request, response) => {
    response.send("Hey there!")
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})