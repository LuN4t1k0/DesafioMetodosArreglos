let tRealizadas = document.querySelector("#tRealizadas");
let tTareas = document.querySelector("#tTareas");
let tbody = document.querySelector("#contenido");
let inputTarea = document.querySelector("#inputTarea");
let btnAgregar = document.querySelector("#formTareas");
let color = document.querySelector(".description")

// const tareas = [];

const tareas = [
  {
    id: Date.now() + 1,
    descripcion: "Reunion Cordinacion",
    estado: "Pendiente",
  },
  {
    id: Date.now() + 2,
    descripcion: "Revision ETL",
    estado: "Pendiente",
  },
  {
    id: Date.now() + 3,
    descripcion: "Definicion Protocolo",
    estado: "Pendiente",
  },
];

const template = (tarea) => {
  let id = tareas.findIndex(t => t.id === tarea.id)
  return /*html*/ `
    <tr>
      <th scope="row">${id+1}</th>
        <td class ="description" id="${tarea.id}">${tarea.descripcion}</td>
        <td>${tarea.estado}</td>
        <td>
          <button class="btn btn-danger" onclick="eliminarTarea(${tarea.id})">ELIMINAR</button>
          <button class="btn btn-success ms-1" onclick="actualizarTarea(${tarea.id})">TERMINAR</button>
        </td>
    </tr>`;
};

const renderTareas = () => {
  let html = "";
  for (const tarea of tareas) {
    html += template(tarea);

  }
  contenido.innerHTML = html;
  tTareas.innerHTML = tareas.length;
};

const agregarTarea = () => {
  if (inputTarea.value.length == 0) {
    alert("Debes ingresar una tarea");
  } else {
    let nuevaTarea = {
      id: Date.now(),
      descripcion: inputTarea.value,
      estado: "Pendiente",
    };
    tareas.push(nuevaTarea);
    inputTarea.value = "";
    renderTareas();
  }
};

const actualizarTarea = (id) => {
  const index = tareas.findIndex((t) => t.id == id);
  tareas[index] = {
    id: tareas[index].id,
    descripcion: tareas[index].descripcion,
    estado: "Finalizado",
  };
  filtrarTareas();
  renderTareas();
  
};

const eliminarTarea = (id) => {
  const index = tareas.findIndex((t) => t.id === id);
  tareas.splice(index, 1);
  filtrarTareas();
  renderTareas();
};

const filtrarTareas = () => {
  let tareasFinalizadas = tareas.filter((t) => t.estado === "Finalizado");
  console.log(tareasFinalizadas);
  tRealizadas.innerHTML = tareasFinalizadas.length;
};


const cargaDatos = () => {
  let html = "";
  for (const tarea of tareas) {
    html += template(tarea);
  }
  contenido.innerHTML = html;
  tTareas.innerHTML = tareas.length;
};


window.onload = () => {
  cargaDatos();
};
