const currentYear = new Date().getFullYear();

let firstName = prompt('digite seu primeiro nome')
let lastName = prompt('digite seu último nome')
let campoEstudo = prompt('campo de estudo')
let anoNascimento = parseFloat(prompt('ano de nascimento'))
let idade = currentYear - anoNascimento

alert('Recruta: ' + firstName + ' ' + lastName + ', \ncampo de estudo: ' + campoEstudo + ', \n' + idade + ' anos')

