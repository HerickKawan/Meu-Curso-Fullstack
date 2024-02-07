async function obter(){
    let recado = await fetch("exemplo-03.text")
    let converter = await recado.text()
    alert(converter)
    console.log(converter)
}

obter()