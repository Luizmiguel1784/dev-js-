function TextButton(params){
    console.log(params)

    let obj = {
        name:"joao",
        idade: 30,
        adress:"rua joao pedro",
        phonenumber:"11967627389"
    }
    console.log(obj.name);
    console.log(obj.adress);
    console.log(obj.idade);
    console.log(obj.phonenumber);
    
    let{name,idade} = obj
    console.log(name);
    console.log(idade);
    
    
    
    
    

    return (
        <button type="button">
           
            {params.label}
        </button>
    )
}
export default TextButton