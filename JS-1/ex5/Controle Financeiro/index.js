let  saldo = parseFloat(prompt('qual a quantia inicial de dinheiro?'))
let opcao = 0
let v

do{
    opcao = prompt('Escolha o que fazer com seu dinheiro\n' +
    'saldo: ' + saldo + '\n' + '\n' +
    '1 - add money\n' +
    '2 - remove money\n' +
    '3 - sair')

    if(opcao === '1'){
        v = parseFloat(prompt('digite o quanto quer adicionar'))
        saldo += v
    }else if(opcao === '2'){
        v = parseFloat(prompt('digite o quanto quer sacar'))
        saldo -= v
    }else if(opcao === '3'){
        alert('saindo...')
    }else{
        alert('opção invalida')
    }
}while(opcao !== '3')