let v1 = parseFloat(prompt('digite a velocidade do primeiro carro'))
let v2 = parseFloat(prompt('digite a velocidade do segundo carro'))

if(v1 > v2){
    alert('carro 1 é mais rápido')
}else if(v1 === v2){
    alert('os carros tem a mesma velocidade')
}else{
    alert('carro 2 é mais rápido')
}