async function procurar(){
    let procura = await fetch("lista.json")
    let converter = await procura.json()

    let procura2 = await fetch("cores.json")
    let cores = await procura2.json()

    for (let x in converter){
        //alert(converter[x])

    let indice = parseInt(math.random() * 4)

    document.body.innerHTML += `
        <h1 style="color:${cores[indice]}">
            ${converter[x]}
        </h1>
    `
    
    }
}
procurar()