async function celulares(){
    let resultado = await fetch("celular.json")
    let celular = await resultado.json()

    let grupoDiv = document.getElementById("lista-card")
    //Essa técnica é útil quando você precisa manipular ou interagir com elementos HTML específicos em uma página da web. 
    //A partir deste ponto, você pode utilizar a variável grupoDiv para realizar várias operações no elemento HTML, 
    //como adicionar conteúdo, alterar estilos, ouvindo eventos, entre outras manipulações.

    for(let x in celular){
    document.body.innerHTML +=`
    <div class = "card">
        <h1> ${celular[x].t} </h1>
        <p>A marca do celular é ${celular[x].marca} </p>
        <p>O modelo do celular é ${celular[x].modelo}</p>
        <p>Tem ${celular[x].armazenamento} de  aramazenamento</p>
        <p>Tem ${celular[x].ram} de memória</p>
   </div>
    `}
}
celulares()