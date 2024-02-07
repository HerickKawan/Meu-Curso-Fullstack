async function procurar(){
    let resultado = await fetch("exemplo-04.txt")
    let converter = await resultado.text()
    alert(converter)
} 
