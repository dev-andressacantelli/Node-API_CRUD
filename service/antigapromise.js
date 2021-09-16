/* 
const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
        // Inicializando o objeto pela comunicação 
        const http = new XMLHttpRequest()

        // Abrindo a comunicação entre a kinha aplicação e a API
        // No parâmetro: (o que pede / pra onde irá enviar a requisição) 
        http.open('GET', 'http://localhost:3000/profile')

        // A resposta que o servidor envia de volta, através do método onload (ao carregar a página)
        // data é onde os dados estão 
        http.onload = () => {
            if(http.status >= 400){
                reject( JSON.parse(http.response))
            } else {
                resolve( JSON.parse(http.response))
            }
        }
        // Enviando a comunicação 
        http.send()
    })
    return promise              
}

O que é uma função assincrona?
Quando uma função assíncrona é chamada, ela retorna uma Promise. 
Quando a função assíncrona retorna um valor, a Promise será resolvida com o valor retornado. 
Quando a função assíncrona lança uma exceção ou algum valor, a Promise será rejeitada com o valor lançado.
*/
