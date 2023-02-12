const listaArgumentos = process.argv.slice(2);

console.log("------------------------ Executando um FOR ------------------------ ");
for(let controladorFor = 0; controladorFor<listaArgumentos.length;controladorFor++){
    console.log(`Na posição ${controladorFor}, o valor lido é: ${listaArgumentos[controladorFor]}`);
}

console.log("----------------------- Executando um WHILE ------------------------ ");
let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Na posição ${controladorWhile}, o valor lido é ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log("-------------------- Executando um DO WHILE ------------------------ ");
let controladorDoWhile = 0;
do{
    console.log(`Na posição ${controladorDoWhile} , o valor lido é ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
}while(controladorDoWhile < listaArgumentos.length)

console.log('-------------------- Executando um FOR OF ---------------------------');

for(const argumento of listaArgumentos){
    console.log(`Valor lido = ${argumento}`);
}

console.log('---------- Executando um FOR OF  (com a posição marcada)-------------');

let controladorForOf = 0;
for(const argumento of listaArgumentos){
    console.log(`Na posição ${controladorForOf}, o Valor lido é ${argumento}`);
    controladorForOf++;
}

