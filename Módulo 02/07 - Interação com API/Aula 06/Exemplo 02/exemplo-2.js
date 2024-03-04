async function celulares(){
    let resultado = await fetch("celular.json")
    let celular = await resultado.json()

    let grupoDiv = document.getElementById("lista-card")
    //Essa técnica é útil quando você precisa manipular ou interagir com elementos HTML específicos em uma página da web. 
    //A partir deste ponto, você pode utilizar a variável grupoDiv para realizar várias operações no elemento HTML, 
    //como adicionar conteúdo, alterar estilos, ouvindo eventos, entre outras manipulações.

    for(let x of celular)
    grupoDiv.innerHTML +=`
    <div class = "card">
        <img src="${x.img}" width="200" height="auto">
        <h2> ${x.t} </h2>
        <p>A marca do celular é ${x.marca} </p>
        <p>O modelo do celular é ${x.modelo}</p>
        <p>Tem ${x.armazenamento} de  aramazenamento</p>
        <p>Tem ${x.ram} de memória</p>
   </div>
    `
}
celulares()