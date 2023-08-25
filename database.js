const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config()
const database = new pg.ClientBase(process.env.DATABASE)


database.connect((erro)=>{
    if(erro){
        return console.log('Erro: ', erro)
    } else{
        return console.log('Conectado com sucesso')
    }
})

module.exports = database