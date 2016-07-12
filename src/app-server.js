import {exchangeApp, initialState}   from './state-reducers'
import {createStore, renderTemplate} from './framework'

const templateFile = "./app-template.html"

const http = require('http')
const fs = require('fs')

const store = createStore( exchangeApp, initialState )

//TODO: save store as session

http.createServer((request, response) => {

    //TODO: parse request and dispatch reqiested action
    
    fs.readFile(templateFile, (err, template) => {
        const html = renderTemplate( store.getState(), template )
        response.write( html )
        response.end()
    })
}).listen(8000)
