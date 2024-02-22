async function concessionaria(){
    let resultado = await fetch("carros.json")
    let carros = await resultado.json()

    //alert("A marca é " + carros.marca + ", o modelo é " + carros.modelo +
     //", o ano é " + carros.ano + ", e a cor é " + carros.cor)
    //alert(carros[1].modelo)
    //for (let  x in carros){
        //alert(carros[x])
    //}

    document.body.innerHTML += `  <p> A marca do carro é ${carros[0].marca}</p>
    <p> O modelo do carro é ${carros[0].modelo}</p>
    <p> O ano do carro é ${carros[0].ano}</p>
    <p> A cor do carro é ${carros[0].cor}</p>`
}
concessionaria()