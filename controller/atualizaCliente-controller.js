import { clienteService } from "../service/cliente-service.js";

(async () => {
    const pegaURL = new URL(window.location)

    const id = pegaURL.searchParams.get('id') //Pega o ID do usuário

    const inputNome = document.querySelector('[data-nome]') //Pega o nome 
    const inputEmail = document.querySelector('[data-email') //Pega o email
    try {
        const dados = await clienteService.detalhaCLiente(id)
        inputNome.value = dados.nome     //Deixa o nome editável
        inputEmail.value = dados.email  //Deixa o email editável
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }

    //Salva o formulário editado
    const formulario = document.querySelector('[data-form]')

    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()
        try {
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
            window.location.href = "../telas/edicao_concluida.html"
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    })
})()




