if(2 == 3){
    // nesse caso, o == compara apenas o valor, e não o tipo de dado 
    // então seria possível usar 2 == '2' 
    // mesma coisa pro !=
}

if(2 === 3){
    // enquanto aqui, ele compara tanto o valor quanto o tipo de dado
    // então não aceitaria string por exemplo
    // mesma coisa pro !==
}