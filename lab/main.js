let fullName = "Cleo de Jesus"

// console.log(fullName.split(" "))

//let arrayString = fullName.split(" ")
// console.table(arrayString)

// let arrayCount = arrayString.length

// console.log(arrayCount);

// let name = arrayString[0]

// let lastName = arrayString[arrayCount-1]

// function welcome(){

// console.log("Hello World! dentro da função ")

    
// }

// welcome()

// function WelcomeComParams(name) {
//     console.log(`Ola ${name}`);
    
    
// }


function naoSei(fullName){

    let arrayString = fullName.split(" ")
    let firstName = arrayString[0]
    let lastName = arrayString[arrayString.length - 1]


    console.log(`Olá ${firstName} ${lastName}`);
    


}
naoSei("luiz miguel santos almeida")

//funcao que recebe como parametro o nome completo e retorna o ultimo e o primeiro