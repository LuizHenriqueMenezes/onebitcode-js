let metro = parseFloat(prompt('digite um valor em metros'))
let opcao = prompt('digite uma das opções: mm, cm, dm, dam, hm, km')
let resultado

switch (opcao) {
    case "mm":
        resultado = metro * 1000
        alert(metro + 'm = ' + resultado + 'mm')
        break
    case "cm":
        resultado = metro * 100
        alert(metro + 'm = ' + resultado + 'cm')
        break
    case "dm":
        resultado = metro * 10
        alert(metro + 'm = ' + resultado + 'dm')
        break
    case "dam":
        resultado = metro / 10
        alert(metro + 'm = ' + resultado + 'dam')
        break
    case "hm":
        resultado = metro / 100
        alert(metro + 'm = ' + resultado + 'hm')
        break
    case "km":
        resultado = metro / 1000
        alert(metro + 'm = ' + resultado + 'km')
        break
    default:
        alert('opção invalida')
}
