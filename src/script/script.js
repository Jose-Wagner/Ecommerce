const form = document.getElementById('form')

form.addEventListener("submit", (e) => {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value

    let dados = {
        nome,
        email,
    }
    let convertDados = JSON.stringify(dados)
    localStorage.setItem('lead', convertDados) 

    alert(`Inscrição realizada com sucesso!`)
})