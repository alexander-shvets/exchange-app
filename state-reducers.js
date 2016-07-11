//import * from 'business-logic'

const initialState = {input: '', result: ''}

function exchangeApp( state /* = initialState */, action ){
    switch( action.type ){
        case "EXCHANGE":
            var
            result = castUserInput( action.input )
            result = exchange( result )
            result = formatExchangeResult( result )
            return {
                input:  action.input,
                result: result
            }
    }
}
