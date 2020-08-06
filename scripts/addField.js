// Procura o botão
document.querySelector("#add-time")
// Quanco clicar no botão 
.addEventListener('click', cloneField)


// exectutar uma ação
function cloneField () {
    // Duplicar os campos. Que campos?
     const nemFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os vampos
    const fields = nemFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })
    //Colocar na página
    document.querySelector('#schedule-items').appendChild(nemFieldContainer)
}