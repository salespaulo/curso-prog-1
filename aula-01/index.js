const executar = () => {
    // window: Janela toda que abre o HTML
    // document: Documento HTML

    const elementoNome = document.getElementById('inputNome')
    const elementoIdade = document.getElementById('inputIdade')

    const varNome = elementoNome.value
    const varIdade = elementoIdade.value

    // const nomePreenchido = nome === null
    // const nomePreenchido = nome === undefined
    const nomePreenchido = !!varNome

    // const idadePreenchido = idade === null
    // const idadePreenchido = idadde === undefined
    const idadePreenchida = !!varIdade

    console.assert(nomePreenchido, 'Nome não preenchido!')
    console.assert(idadePreenchida, 'Idade não preenchido!')

    let msg = null

    if (nomePreenchido) {
        msg = 'Olá, ' + varNome
    } else {
        // 'Por favor, preencha o campo "nome"!'
        const msgErro = 'Campo "nome" não foi preenchido!'

        window.alert(msgErro)
        throw new Error(msgErro)
    }

    if (idadePreenchida) {
        msg = msg + ', você é '
    } else {
        // 'Por favor, preencha o campo "idade"!'
        const msgErro = 'Campo "idade" não foi preenchida!'

        window.alert(msgErro)
        throw new Error(msgErro)
    }

    let maiorOuMenor = null

    if (varIdade > 18) {
        maiorOuMenor = 'maior'
    } else {
        maiorOuMenor = 'menor'
    }

    const msgFinal = msg + maiorOuMenor + ' de idade!'
    console.log(msgFinal)
    window.alert(msgFinal)
}
