function btnFechar(li){
    let span = document.createElement("SPAN")
    let txt = document.createTextNode("\u00A0\u00D7")

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = () => span.parentElement.style.display = "none"
}

document.querySelectorAll('li').forEach(btnFechar);

document.querySelector('ul').addEventListener('click', (e) => {
    if(e.target.tagName === 'LI');
    e.target.classList.toggle('checked')
})

function addTarefa(){
    let li = document.createElement('LI')
    let tarefa = document.form_main.task.value
    let caixatarefa = document.createTextNode(tarefa)

    li.appendChild(caixatarefa)//Texto foi criado como lista
    document.querySelector('ul').appendChild(li)//Essa lista desordenada via receber o elemento filho
    document.form_main.task.value = ""// Após limpa o input

    btnFechar(li);//Chama novamente a função
}