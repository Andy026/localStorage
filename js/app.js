let listaTareas = document.querySelector('#lista');
let tareas = [];

const cargaInicial = () => {
    tareas = JSON.parse(localStorage.getItem(tareas)) || []
    if(tareas.length>0){

        tareas.forEach(tarea => {
            crearLista(tarea)
        });
    }
    document.querySelector('#textTarea').focus()
}

const crearLista = (texto) => {
    let contenedor = document.createElement('div');

    let cardTarea = `
    <div class= "card nt-2 card-list">
    <div class= "card-body d-flex justify-content-between align-items-center">
    ${texto.toUpperCase()}
    <button class= "btn btn-outline-danger">X</button>
    
    </div>
    </div>
    `;
    contenedor.innerHTML = cardTarea

    listaTareas.appendChild(contenedor)
    document.querySelector('#textTarea').value = "";
};

const addItemList = (e) => {
    e.preventDefault();
    let texto = document.querySelector('#textArea').value;
    tareas.push(texto);
    localStorage.setItem('tareas', JSON.stringify(tareas))
    crearLista(texto);
};

cargaInicial();