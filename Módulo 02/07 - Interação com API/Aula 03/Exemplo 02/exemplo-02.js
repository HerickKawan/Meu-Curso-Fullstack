async function obter(){
    let resposta = await fetch("text.txt")
    let convertido = await resposta.text()
    alert(convertido)
}
obter()