const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Desafio: mulher chinesa com menor salário
const filtroChinesa = funcionario => funcionario.pais == 'China' && funcionario.genero == 'F'
const menorSalario = (funcionarioAnterior, funcionarioAtual) => funcionarioAtual.salario < funcionarioAnterior.salario ? funcionarioAtual : funcionarioAnterior

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(filtroChinesa).reduce(menorSalario))
})