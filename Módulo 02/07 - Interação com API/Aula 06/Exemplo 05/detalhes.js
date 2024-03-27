async function buscarDetalhes(){
    // consumo do JSON
    let busca = await fetch("lista.json")
    let produtos = await busca.json()

    // Criou um objeto URLSearchParams e passou
    // a coleta dos parametros da URL nele.
    let parametros = new URLSearchParams(window.location.search)
    // Obteve do parametro "produto-id", o seu valor 
    let parametroID = parametros.get("produto-id")

    // Criou uma variável vazia 
    let indiceProd 
    // Usou o for para percorrer toda a lista de parametros JSO
     for(let x in produtos){
        //Verifica se o ID de cada produto é igual ao ID
        // coletado na URL da página no navegador
        if(produtos[x].id == parametroID){
            // Atribui á variável vazia, o valor de X, que contém
            // o indice do produto de corresponde ao ID da URL
            indiceProd = x
        }
    }

    // Adiciona na TAG BODY do HTML, um código HTML cocatenado
    // com valores do objeto produto encontrado
    document.getElementById("detalhes").innerHTML += `
    <div class="card-Detalhes">
        <h3>${produtos[indiceProd].nome}</h3>
        <img src="${produtos[indiceProd].img[0]}" id="frame" width="300" height="250">
        <div class="miniaturas" id="miniaturas">
            
        </div>
        <div class="valoresDetalhes">
            <span class="valorCom"> R$ ${produtos[indiceProd].valorComDesconto.toFixed(2).replace(".",",")}</span>
            <span class="valorSem"> R$ ${produtos[indiceProd].valorSemDesconto.toFixed(2).replace(".",",")}</span>
        </div>
    </div>
    `

    let divMiniaturas = document.getElementById("miniaturas")
    for(let y of produtos[indiceProd].img){
        divMiniaturas.innerHTML += `
            <img src="${y}" class="mini" width="80" height="80" style="border: 1px solid #000; border-radius: 10px">
        
        `
    }

    let minizinhas = document.getElementsByClassName("mini")
    for(let a of minizinhas){
        a.addEventListener("mouseover", deslize)
    }

}

function deslize(){
    document.getElementById("frame").src = this.src
}

buscarDetalhes()