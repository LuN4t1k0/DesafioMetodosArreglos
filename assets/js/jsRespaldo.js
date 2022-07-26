// let tRealizadas = document.querySelector('#tTareas');
// let tTareas = document.querySelector("#tTareas");
let tbody = document.querySelector('#contenido')
let inputTarea = document.querySelector('#inputTarea')
let btnAgregar = document.querySelector('#formTareas')
let html = "";


const tareas = []

const renderTareas = () => {
  let contador = 0
  for (const tarea of tareas) {
   
    html += /*html*/ `
    <tr>
      <th scope="row">${contador}</th>
        <td>${tarea.descripcion}</td>
        <td>${tarea.estado}</td>
        <td>
          <button type="submit" class="btn btn-danger" onclick="eliminarTarea(${tarea.id})">ELIMINAR</button>
          <button type="submit" class="btn btn-success ms-1">TERMINAR</button>
        </td>
    </tr>`;
  }
  contenido.innerHTML = html
};

const agregarTareas = (e) => {
  e.preventDefault()

  let nuevaTarea = { id: Date.now(), descripcion: inputTarea.value, estado: "pendiente" }
  tareas.push(nuevaTarea)
  inputTarea.value = ""
  renderTareas()
  console.log(tareas);
}

// const terminaTarea = (id) => {
//   const index = tareas.findIndex(t => t.id == id)
//   tareas[index] = estado = "Finalizada"
//   renderTareas()
// }

const eliminarTarea = (id) => {
  
  const index = tareas.findIndex(t => t.id == id)
  tareas.slice(index, 1)
  renderTareas()
}





btnAgregar.addEventListener('click', agregarTareas)
// btnAgregar.addEventListener('submit', (e) => {
//   e.preventDefault()
// })


