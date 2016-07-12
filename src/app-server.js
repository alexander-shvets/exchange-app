import {exchangeApp, initialState}   from './state-reducers'
import {createStore, renderTemplate} from './framework'
// require('./state-reducers')
// require('./framework')

const templateFile = "./app-template.html"

var http = require('http')
var fs = require('fs')

const store = createStore( exchangeApp, initialState )

http.createServer((request, response) => {
    fs.readFile(templateFile, (err, template) => {
        const html = renderTemplate( store.getState(), template )
        response.write( html )
        response.end()
    })
}).listen(8000)
