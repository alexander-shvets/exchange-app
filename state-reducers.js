//import * from 'business-logic'

const initialState = {input: '', result: ''}

function exchangeApp( state = initialState, action ){
    switch( action.type ){
        case "EXCHANGE":
            const input = castUserInput( action.input )
            var  result = exchange( input )
            return {input, result: formatExchangeResult( result )}
    }
}
