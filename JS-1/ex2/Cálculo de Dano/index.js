let nomeAtaque = prompt('Digite o nome do personagem que ataca')
let poderAtaque = parseFloat(prompt('digite o poder de ataque dele'))
let nomeDefesa = prompt('Digite o nome do personagem que defende')
let pontosVida = parseFloat(prompt('digite os pontos de vida dele'))
let poderDefesa = parseFloat(prompt('digite o poder de defesa dele'))
let escudo = confirm('possui escudo?')
let dano

if (poderAtaque > poderDefesa && escudo === false) {
    dano = poderAtaque - poderDefesa
} else if (poderAtaque > poderDefesa && escudo === true) {
    dano = (poderAtaque - poderDefesa) / 2
} else if (poderAtaque <= poderDefesa) {
    dano = 0
}

pontosVida -= dano

if (escudo === true) {
    alert('FINAL:  \n' +
        nomeAtaque + ' tem poder de ataque de ' + poderAtaque + ' \n' +
        nomeDefesa + ' tem poder de defesa de ' + poderDefesa + ' + escudo' + ' \n' +
        'resultado: ' + nomeDefesa + ' ficou com ' + pontosVida + ' pontos de vida!'  + ' \n' +
        'dano: ' + dano)
}else{
    alert('FINAL:  \n' +
        nomeAtaque + ' tem poder de ataque de ' + poderAtaque + ' \n' +
        nomeDefesa + ' tem poder de defesa de ' + poderDefesa + ' não usa escudo' + ' \n' +
        'resultado: ' + nomeDefesa + ' ficou com ' + pontosVida + ' pontos de vida!' + ' \n' +
        'dano: ' + dano)
}