const express = require("express");
const app = express();

const movies = require("./routes/moviesRoutes") //chama rota
const series = require("./routes/seriesRoutes")

app.use("/filmes", movies)//defini rota raiz
app.use("/series", series)

module.exports = app