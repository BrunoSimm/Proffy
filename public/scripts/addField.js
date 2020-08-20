/*Procurar o botão "+Novo Horário", quando clicar no botão, 
executar uma ação de duplicar os campos. Após isso, colocar na página.*/
//
document.querySelector("#add-time").addEventListener("click", cloneField)
//addEventListener => ação a ser "monitorada(click), ação a ser realizada após click"

function cloneField(){
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    //cloneNode() para clonar o elemento selecionado (true para todos os elementos)
    //Elemento clonado atribuido a newFieldContainer

    
    const fields = newFieldContainer.querySelectorAll("input")

    //resetar campos antes de adicionar elemento.
    fields.forEach(function(value,index){
        fields[index].value = ""
    })
    
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
    //appendChield => onde colocar o elemento clonado pelo cloneNode(#schedule-items)
}

