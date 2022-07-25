let tRealizadas = document.querySelector('#tTareas');
let tTareas = document.querySelector("#tTareas");
let contenido = document.querySelector('#contenido')
let html = "";

const tareas = [
  { id: Date.now(), descripcion: "Ir al supermercado", estado: "pendiente" },
  { id: Date.now(), descripcion: "Terminar Desafio", estado: "pendiente" },
  { id: Date.now(), descripcion: "Terminar Serie", estado: "pendiente" },
];

const reder = (tareas) => {
  let contador = 0
  for (const tarea of tareas) {
    contador++
    html += /*html*/ `
    <tr>
      <th scope="row">${contador}</th>
        <td>${tarea.descripcion}</td>
        <td>${tarea.estado}</td>
        <td>
          <button type="submit" class="btn btn-danger">ELIMINAR</button>
          <button type="submit" class="btn btn-success ms-1">TERMINAR</button>
        </td>
    </tr>
  `;
  }
  
};
