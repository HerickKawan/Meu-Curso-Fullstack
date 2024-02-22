async function celulares(){
    let resultado = await fetch("celular.json")
    let celular = await resultado.json()

    for(let x in celular){
    document.body.innerHTML +=`
    <h1> ${celular[x].t} </h1>
    <p>A marca do celular é ${celular[x].marca} </p>
    <p>O modelo do celular é ${celular[x].modelo}</p>
    <p>Tem ${celular[x].armazenamento} de  aramazenamento</p>
    <p>Tem ${celular[x].ram} de memória</p>
   
    `}
}
celulares()