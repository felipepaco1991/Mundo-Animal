let form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    console.log('enviar o formulário')
    e.preventDefault()
})

const fields = document.querySelectorAll('[required')

function customValidation(event){
    event.preventDefault()

    const field = event.target

    function verifyErrors(){
        let foundError = false
        for(let error in field.validity){
            if(field.validity[error] && !field.validity.valid){
                foundError = true
            }
        }

        return foundError
    }

    const error = verifyErrors()
    console.log('Error Exists:', error)

   if(error){
   field.setCustomValidity('Esse Canpo é obrigatório')

   }else{
       field.setCustomValidity('')
   }

}

for (let field of fields){
    field.addEventListener('invalid', customValidation)
    field.addEventListener('blur', customValidation)
}