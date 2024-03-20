async function buscarDetalhes(){
    let busca = await fetch("lista.json")
    let produtos = await busca.json()

    // document.body.innerHTML
}