async function procurar(){
    let procura = await fetch("lista.json")
    let converter = await procura.json()

    for (let x in converter){
        //alert(converter[x])
    
    document.body.innerHTML+=`
        <h1 style="color:red">

            ${converter[x]}

        </h1>
    `
    
    }
}
procurar()