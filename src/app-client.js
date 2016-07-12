import {exchangeApp, initialState}   from './state-reducers'
import {createStore, renderTemplate} from './framework'

const store = createStore( exchangeApp, initialState )

renderApplication()
store.subscribe( renderApplication )

function renderApplication(){
    var templateEl    = document.getElementById('exchange-template')
    var placeholderEl = document.getElementById('exchange-placeholder')

    placeholderEl.innerHTML =
        renderTemplate( store.getState(), templateEl.innerHTML )

    var forms = placeholderEl.getElementsByTagName('FORM')
    for(var form of forms) form.onsubmit = function(){
        store.dispatch({type:'EXCHANGE', input: form.input.value})
        return false
    }
}
