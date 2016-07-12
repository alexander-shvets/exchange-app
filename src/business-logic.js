// business logic

export const nominals = [200, 100, 50, 20, 2, 1]

export function exchange( coins ){
    var value = coins
    return nominals.map(function( nominalValue ){
        const count = parseInt( value / nominalValue)
        value = value % nominalValue
        return count
    })
}

// validators

export function castUserInput( string ){
    return parseFloat(string, 10)
}

export function formatExchangeResult( exchangeResult ){
    return nominals.map(function( nominalValue, i ){
        return exchangeResult[i] && (
            exchangeResult[i] + 'x'
            + formatCurrency( nominalValue / 100 )
        )
    })
    .filter(Boolean)
    .join(' ')
}

function formatCurrency( pounds ){
    if( pounds >= 1) return '&pound;' + pounds
    else             return pounds * 100 + 'p'
}
