async function celulares(){
    let busca = await fetch("celulares.json")
    let converter = await busca.json()

    let grupoDiv = document.getElementById("lista-card")

    for(let x of converter){
    grupoDiv.innerHTML +=`
    <div class = "card">
        <img src="${x.t}" width="200" height="auto">
        <h2>${x.marca}</h2>
        <p>${x.modelo}</p>
        <p>${x.armazenamento}</p>
        <p>${x.ram}</p>
    </div>
    `
    
    }

}

celulares()