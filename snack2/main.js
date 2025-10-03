

function dado (numero){
    return new Promise((resolve, reject) => {
        console.log("Lancio il dato")
        setTimeout(() =>{
            numero = Math.floor(Math.random()*6) +1
            resolve(numero)
        },3000)
    })
}


dado()
.then(numero => console.log(numero))
.catch(error => console.error(error))
