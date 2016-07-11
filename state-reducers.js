import {castUserInput, exchange, formatExchangeResult} from './business-logic'

export const initialState = {input: '', result: ''}

export function exchangeApp( state = initialState, action ){
    switch( action.type ){
        case "EXCHANGE":
            const input = castUserInput( action.input )
            var  result = exchange( input )
            return {input, result: formatExchangeResult( result )}
    }
}
