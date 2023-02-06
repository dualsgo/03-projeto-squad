const express = require('express')
const {response} = require('express')
const {uuid} = require('uuidv4')//coloca id unico

const app = express()
app.use(express.json())
const Casas = []
const Apartamentos = []
const Lancamentos = []

//-----------------------------------------VISUALIZAR----------------------------------------------------
app.get('/Casas', (request, response) =>{
    return response.json(Casas)
})
app.get('/Apartamentos', (request, response) =>{
    return response.json(Apartamentos)
})
app.get('/Lancamentos', (request, response) =>{
    return response.json(Lancamentos)
})

//------------------------------------------INSERIR------------------------------------------------------
app.post('/Casas', (request, response) => {  
    const {tipo, quartos, suite, tamanho} = request.body
    const casa = {id: uuid(), tipo, quartos, suite, tamanho}
    Casas.push(casa)
    return response.status(201).json(casa)
})
app.post('/Apartamentos', (request, response) => {
    const {tipo, quartos, suite, tamanho} = request.body
    const apt = {id: uuid(), tipo, quartos, suite, tamanho}
    Apartamentos.push(apt)
    return response.status(201).json(apt)
})
app.post('/Lancamentos', (request, response) => {  
    const {regiao, tamanho, bairro, entrega} = request.body
    const lancamento = {id: uuid(), regiao, tamanho, bairro, entrega}
    Lancamentos.push(lancamento)
    return response.status(201).json(lancamento)
})

//--------------------------------------------ATUALIZAR------------------------------------------------
app.put('/Casas/:id', (request, response) => {
    const { id } = request.params
    const { tipo, quartos, suite, tamanho } = request.body
    const newCasas= { id, tipo, quartos, suite, tamanho }
    const casaindex = Casas.findIndex(casa => casa.id == id)
    Casas[casaindex] = newCasas;
    return response.json(newCasas)
})
app.put('/Apartamentos/:id', (request, response) => {
    const { id } = request.params
    const { tipo, quartos, suite, tamanho } = request.body
    const newApartamentos= { id, tipo, quartos, suite, tamanho }
    const aptindex = Apartamentos.findIndex(apt => apt.id == id)
    Apartamentos[aptindex] = newApartamentos;
    return response.json(newApartamentos)
})
app.put('/Lancamentos/:id', (request, response) => {
    const { id } = request.params
    const { regiao, tamanho, bairro, entrega } = request.body
    const newLancamentos= { regiao, tamanho, bairro, entrega }
    const lancamentoindex = Lancamentos.findIndex(lancamento => lancamento.id == id)
    Lancamentos[lancamentoindex] = newLancamentos;
    return response.json(newLancamentos)
})

//-------------------------------------------APAGAR------------------------------------------------------
app.delete('/Casas/:id', (request, response) => {
    const { id } = request.params
    const casaindex = Casas.findIndex(casa => casa.id == id)
    Casas.splice(casaindex, 1)
    return response.status(204).send()
})
app.delete('/Apartamentos/:id', (request, response) => {
    const { id } = request.params
    const aptindex = Apartamentos.findIndex(apt => apt.id == id)
    Apartamentos.splice(aptindex, 1)
    return response.status(204).send()
})
app.delete('/Lancamentos/:id', (request, response) => {
    const { id } = request.params
    const lancamentoindex = Lancamentos.findIndex(lancamento => lancamento.id == id)
    Lancamentos.splice(lancamentoindex, 1)
    return response.status(204).send()
})

app.listen(8181, () =>{
    console.log('O servidor foi iniciado!')
})