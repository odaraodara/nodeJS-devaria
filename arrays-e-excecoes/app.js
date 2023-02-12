
try{
    const listaDeProdutosDisponiveis = [
        "Limão",
        "Morango",
        "Maçã",
        "Mamão",
        "Abacate",
        "Abacaxi",
        "Laranja",
        "Goiaba",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaPedidosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    
    listaPedidosDisponiveis.forEach(produto => console.log(`${produto} : está disponível`));
    
    
    const listaPedidosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento)
    });
    
    listaPedidosNaoDisponiveis.forEach(produto => console.log(`${produto} : indisponível no momento`));
    
    console.log('---- Nossa lista de produtos ----');
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach( produto => console.log(produto));
    
} catch(e){
    console.log('Não foi possível realizar essa operação')
}

