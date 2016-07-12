export function createStore( appReducer, initialState ){
    var state = initialState
    var listeners = []
    return {
        getState: () => state,

        dispatch( action ){
            state = appReducer( state, action )
            listeners.forEach( handler => handler() )
        },

        subscribe( listener ){
            listeners.push( listener )
            return function unsubscribe(){
                const index = listeners.indexOf( listener )
                delete listeners[ index ]
            }
        }
    }
}

export function renderTemplate( data, template ){
    return Object.keys( data ).reduce( replaceVariable, template)
    function replaceVariable( html, varName ){
        return html.replace('{'+varName+'}', data[varName])
    }
}
