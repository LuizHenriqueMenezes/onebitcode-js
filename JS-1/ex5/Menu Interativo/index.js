let opcao

do {
    opcao = prompt('Menu\n' +
        '1 - oiiiii\n' +
        '2 - helloooo\n' +
        '3 - hiiiiii\n' +
        '4 - hola\n' +
        '5 - encerrar')

    switch (opcao) {
        case "1":
            alert('opção 1 oiiiiiiiiiii')
            break
        case "2":
            alert('opção 2 oiiiiiiiiiii')
            break
        case "3":
            alert('opção 3 oiiiiiiiiiii')
            break
        case "4":
            alert('opção 4 oiiiiiiiiiii')
            break
        case "5":
            alert('encerrando....................')
            break
        default:
            alert('opção invalida')
    }

} while (opcao !== '5')