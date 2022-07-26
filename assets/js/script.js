
// let tRealizadas = document.querySelector('#tTareas');
// let tTareas = document.querySelector("#tTareas");
let tbody = document.querySelector('#contenido')
let inputTarea = document.querySelector('#inputTarea')
let btnAgregar = document.querySelector('#formTareas')

let contador = 0
const tareas = []

const renderTareas = () => {
  let html =""
  for (const tarea of tareas) {
    html += /*html*/ `
    <tr>
      <th scope="row">${contador}</th>
        <td>${tarea.descripcion}</td>
        <td>${tarea.estado}</td>
        <td>
          <button class="btn btn-danger" onclick="eliminarTarea(${tarea.id})">ELIMINAR</button>
          <button class="btn btn-success ms-1">TERMINAR</button>
        </td>
    </tr>`;
  }
  contenido.innerHTML = html
};

// const agregarTareas = () => {
//   let nuevaTarea = { id: Date.now(), descripcion: inputTarea.value, estado: "pendiente" }
//   tareas.push(nuevaTarea)
//   inputTarea.value = ""
//   renderTareas()
//   console.log(tareas);
// }

const agregarTarea = () => {
  let nuevaTarea = { id: Date.now(), descripcion: inputTarea.value, estado: "pendiente" }
  tareas.push(nuevaTarea)
  inputTarea.value = ""
  renderTareas()
}

// const terminaTarea = (id) => {
//   const index = tareas.findIndex(t => t.id == id)
//   tareas[index] = estado = "Finalizada"
//   renderTareas()
//   console.log(tareas);
// }

const eliminarTarea = (id) => {
  const index = tareas.findIndex(t => t.id === id)
  tareas.splice(index, 1)
  renderTareas()
}

// btnAgregar.addEventListener('click', agregarTarea)
const eliminarInvitado = (id) => {
  const index =  invitados.findIndex(ele => ele.id === id)
  invitados.splice(index, 1)
  renderInvitados()
}