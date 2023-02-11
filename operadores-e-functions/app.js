const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

const validarNumeroInformado = (numero) => {
   const resultado = Number.parseFloat(numero);
   if (!resultado){
    console.log('O número digitado é inválido');
   }
   return resultado 
}

const validarOperador = (operador) =>{
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
            return (operador);
        default:
            console.log('O operador informado é inválido');
            return null;                    
    }
}



readLine.question('Favor informar um número: ', (numero1) =>{
    const nValidado1 = validarNumeroInformado(numero1);

    if (nValidado1){
        readLine.question('Favor informar outro número: ', (numero2) => {
            const nValidado2 = validarNumeroInformado(numero2);

            if (nValidado2){
                readLine.question('Favor informar o operador: ' , (operador) => {
                    const oValidado = validarOperador(operador);
                    if (oValidado){
                        switch(operador){
                            case '+': console.log(`Operador de adição selecionado \n${nValidado1} + ${nValidado2} = ${nValidado1 + nValidado2}`);
                                break;
                            case '-': console.log(`Operador de subtração selecionado  \n${nValidado1} - ${nValidado2} = ${nValidado1 - nValidado2}`);
                                break;
                            case '/': console.log(`Operador de divisão selecionado  \n${nValidado1} / ${nValidado2} = ${nValidado1 / nValidado2}`);
                                break; 
                            case '*': console.log(`Operador de multiplicação selecionado  \n${nValidado1} * ${nValidado2} = ${nValidado1 * nValidado2}`);
                                break; 
                            default: break;      
                        }
                    }

                });
            }
        });
    }
})

