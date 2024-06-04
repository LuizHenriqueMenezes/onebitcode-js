let nome = "luiz"

console.log(nome + " torce pro timão e ama a bea")
console.error('corinthians')
console.warn('corinthians')

// alert('hala madrid')
let patrao = prompt('digite seu nome ae patrão')
let confirma = confirm('patrão chama-se ' + patrao + "?")

if(confirma == true){
    alert('bem vindo, ' + patrao)
}else{
    let confirma = confirm('auto destruição?')
    if(confirma == true){
        window.close()
    }else{
        alert('bele')
    }
}