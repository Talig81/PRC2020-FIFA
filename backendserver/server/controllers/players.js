var Players = module.exports
const axios = require('axios')

function normalize(response) {
    return response.results.bindings.map(obj =>
        Object.entries(obj)
            .reduce((new_obj, [k,v]) => (new_obj[k] = v.value, new_obj),
                    new Object()));
}

function myNormalize(r){
    return r.results.bindings.map(o => {
        var novo = {}
        for (let [k, v] of Object.entries(o)) {
            novo[k] = v.value
          }
        return novo  
    })
}

var prefixes = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX noInferences: <http://www.ontotext.com/explicit>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX : <http://www.di.uminho.pt/prc2020/2020/1/fut#>
`

var getLink = "http://localhost:7200/repositories/repo-test-1" + "?query=" 


Players.getLista = async function(){
    var query = `select ?club where {
        :Ronaldo-IconBase :hasClub  ?club.
    } limit 100  `
    var encoded = encodeURIComponent(prefixes + query)
    console.log("here")
    try{
        var response = await axios.get(getLink + encoded)
        console.log(response.data)
        return normalize(response.data)
    }
    catch(e){
        throw(e)
    }
}
/*
Players.getLista = async function(){
    var query = `select ?club where { 
        :Ronaldo-IconBase :hasClub  ?club.
    } limit 100  `
    var encoded = encodeURIComponent(prefixes + query)
    console.log(encoded)
    console.log("get lista")
}*/


