const express = require('express')
const { response } = require('express')
const { uuid } = require('uuidv4')//coloca id unico

const app = express()
app.use(express.json())
const sedan = []
const hatch = []
const suv = []

//-----------------------------------------VISUALIZAR----------------------------------------------------
app.get('/sedan', (request, response) => {
    return response.json(sedan)
})
app.get('/hatch', (request, response) => {
    return response.json(hatch)
})
app.get('/suv', (request, response) => {
    return response.json(suv)
})

//------------------------------------------INSERIR------------------------------------------------------
app.post('/sedan', (request, response) => {
    const { marca, modelo, ano, cor } = request.body
    const sedan = { id: uuid(), marca, modelo, ano, cor }
    sedan.push(sedan)
    return response.status(201).json(sedan)
})
app.post('/hatch', (request, response) => {
    const { marca, modelo, ano, cor } = request.body
    const hatch = { id: uuid(), marca, modelo, ano, cor }
    hatch.push(hatch)
    return response.status(201).json(hatch)
})
app.post('/suv', (request, response) => {
    const { marca, modelo, ano, cor } = request.body
    const suv = { id: uuid(), marca, modelo, ano, cor }
    suv.push(suv)
    return response.status(201).json(suv)
})

//--------------------------------------------ATUALIZAR------------------------------------------------
app.put('/sedan/:id', (request, response) => {
    const { id } = request.params
    const { marca, modelo, ano, cor } = request.body
    const newsedan = { id, marca, modelo, modelo, cor }
    const sedanindex = sedan.findIndex(sedan => sedan.id == id)
    sedan[sedanindex] = newsedan;
    return response.json(newsedan)
})
app.put('/hatch/:id', (request, response) => {
    const { id } = request.params
    const { marca, modelo, ano, cor } = request.body
    const newhatch = { id, marca, modelo, modelo, cor }
    const hatchindex = hatch.findIndex(hatch => hatch.id == id)
    hatch[hatchindex] = newhatch;
    return response.json(newhatch)
})
app.put('/suv/:id', (request, response) => {
    const { id } = request.params
    const { marca, modelo, ano, cor } = request.body
    const newsuv = { id, marca, modelo, modelo, cor }
    const suvindex = suv.findIndex(suv => suv.id == id)
    suv[suvindex] = newsuv;
    return response.json(newsuv)
})

//-------------------------------------------APAGAR------------------------------------------------------
app.delete('/sedan/:id', (request, response) => {
    const { id } = request.params
    const sedanindex = sedan.findIndex(sedan => sedan.id == id)
    sedan.splice(sedanindex, 1)
    return response.status(204).send()
})
app.delete('/hatch/:id', (request, response) => {
    const { id } = request.params
    const hatchindex = hatch.findIndex(hatch => hatch.id == id)
    hatch.splice(hatchindex, 1)
    return response.status(204).send()
})
app.delete('/suv/:id', (request, response) => {
    const { id } = request.params
    const suvindex = suv.findIndex(suv => suv.id == id)
    suv.splice(suvindex, 1)
    return response.status(204).send()
})

app.listen(8181, () => {
    console.log('O servidor foi iniciado!')
})