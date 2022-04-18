

function currencyCon(amount, currencyname) {
    
    let rate ='';

    switch (currencyname) {
        
            case  'USD':  
            rate = 84;  
            break;

            case  'Cad':  
            rate = 96;  
            break;

            case  'URO':  
            rate = 64;  
            break;

            case  'NZ':  
            rate = 60;  
            break;

            case  'REAL':  
            rate = 64;  
            break;

            case  'paound':  
            rate = 64;  
            break;

            
    }

    console.log(`

    ${amount} ${currencyname} = ${amount * rate} BDT.
    
    `);
}
