async function obter(){
    let resposta = await fetch("pizza.txt")
    let convertido = await resposta.text()
    alert(convertido)
    console.log(convertido)
}


obter()   

