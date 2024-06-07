let nome = prompt('Qual seu nome?')
let jaFoi = confirm('Já visitou alguma cidade?')
let cidades = []
let contador = 0

if(jaFoi === true){
    while(jaFoi === true){
        cidades[contador] = prompt('Digite a cidade que vc visitou')
        contador += 1
        jaFoi = confirm('Já visitou outra cidade?')
    }
    
    let tamanho = (cidades.length - 1)
    let cidadesJuntas = ''
    
    while(tamanho >= 0){
        cidadesJuntas += '- ' + (cidades[tamanho] + '\n')
        tamanho -= 1
    }

    alert('cidades visitadas por '+ nome + ': ' + contador + ' \n' + cidadesJuntas)
}else{
    alert('pobrekkkkkkkkkk')
}

