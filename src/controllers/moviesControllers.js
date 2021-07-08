const { response } = require("express")
const movies = require("../models/filmes.json") //dois .. para dar um passo para tras na pasta - defifnindo rota padrao

//definindo rota padrão
const home = (request, response) => {
    response.status(200).send({
        "message": "Olá, seja bem vindx ao {reprograma}flix"
    })
}

const getAll = (request, response) => {
    response.status(200).send(movies);
}

const getById = (request, response) => {
    const requestedId = request.params.id
    const filteredId = movies.find(movie => movie.id == requestedId)
    response.status(200).send(filteredId)
}

const getByTitle = (response, request) => { //como sera string, usaremos query pq o params nao ve os espaços
    const requestedTitle = request.query.title.toLowercase()
    const filteredTitle = movies.find(movie => movie.title.toLowercase().includes(requestedTitle))
    response.status(200).send(filteredTitle)

    if (filteredTitle === "" || filteredTitle === undefined){
        response.status(404).send({
            "message": "Por favor insira um texto válido"
        })
    } else {
        response.status(200).send(filteredTitle)
    }
}



module.exports = { 
    home, 
    getAll, 
    getById,
    getByTitle
} //enviarei dentro de um objeto = sintaxe para podemos acessar