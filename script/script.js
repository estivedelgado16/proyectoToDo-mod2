const itemsArray = localStorage.getItem('items')
? JSON.parse(localStorage.getItem('items'))
: []

function ActualizarTarea(i, updateValue){
  itemsArray[i].thing = updateValue;
  localStorage.setItem('items',JSON.stringify(itemsArray))
  location.reload();
}

function borrarTarea(i) {
  itemsArray.splice(i,1) // Elimina la tarea en el índice especificado
  localStorage.setItem('items', JSON.stringify(itemsArray)) // Actualiza el almacenamiento local
  location.reload();
}
  
  
function mostrarTodos() {
  const todos = document.querySelectorAll('.input-controller');
  todos.forEach((element) => {
    const check = element.querySelector('.toggle');
    element.style.display = '';
  });
  localStorage.setItem('items', JSON.stringify(itemsArray));
}

  function mostrarComp(){
    const completados = document.querySelectorAll('.input-controller')
    completados.forEach((element)=>{
      const check = element.querySelector('.toggle')
      if(check.checked){
        element.style.display = ''
      } else if(!check.checked){
        element.style.display = 'none'
      }
    })
    localStorage.setItem('items', JSON.stringify(itemsArray))
  }
  
function borrarComp(){
const completadostaks = itemsArray.filter((item)=> item.checked === false)
localStorage.setItem('items', JSON.stringify(completadostaks))
location.reload()
}

function mostrarPendientes() {
  const pend = document.querySelectorAll('.input-controller');
  pend.forEach((element) => {
    const check = element.querySelector('.toggle');
    if (check.checked) {
      element.style.display = 'none';
    }
    if (!check.checked) {
      element.style.display = '';
    }
  });
  localStorage.setItem('items', JSON.stringify(itemsArray));
}

function countPend() {
  const completedCount = itemsArray.filter(item => item.checked).length
  const pendingCount = itemsArray.length - completedCount
  localStorage.setItem('items', JSON.stringify(itemsArray));
  return pendingCount;

}


function activateCheckboxListeners() {
  const checkboxes = document.querySelectorAll('.toggle');
  checkboxes.forEach((ch, i) => {
    ch.addEventListener('click', () => {
      itemsArray[i].checked = ch.checked;
      localStorage.setItem('items', JSON.stringify(itemsArray));
      
      // Llama a countPend para actualizar el contador de tareas pendientes
      countPend();
      location.reload();
    });
  });
}

//Código DOM #3:

  // Permite que la acción eliminar impacte el DOM del HTML, acá debes agegar algoritmo de eliminar tarea
  
  function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll('.deleteBtn')
    deleteBtn.forEach((db, i) => {
      db.addEventListener('click', () => {
        //Llamar la función que elimina la tarea
        borrarTarea(i)
      })
    })
}

//Código DOM #4:
  
  // Permite que la acción editar de las 2 listas desplegables "prioridad" y "categoría" impacte el DOM del HTML
  // cuando cambies de opción, inserta este código tal cual, el reto está en saber en qué parte de tu código debes usarlo.
  
  function activateEditListeners() {
    const editBtn = document.querySelectorAll('.editBtn')
    const updateController = document.querySelectorAll('.update-controller')
    const inputs = document.querySelectorAll('.input-controller textarea')
    const prioritySelects = document.querySelectorAll(
      '.edit-controller select'
      )[0]
      const categorySelects = document.querySelectorAll(
          '.edit-controller select'
      )[1]
      
      editBtn.forEach((eb, i) => {
          eb.addEventListener('click', () => {
          updateController[i].style.display = 'block'
          inputs[i].disabled = false
      
          prioritySelects.value = itemsArray[i].priority
          categorySelects.value = itemsArray[i].category
          })
      })
      
      const selectP = document.querySelectorAll('#priority')
      selectP.forEach((s, i) => {
          s.addEventListener('change', (event) => {
          itemsArray[i].priority = event.target.value
          localStorage.setItem('items', JSON.stringify(itemsArray))
          })
      })
      
      const selectC = document.querySelectorAll('#category')
      selectC.forEach((s, i) => {
          s.addEventListener('change', (event) => {
          itemsArray[i].category = event.target.value
          localStorage.setItem('items', JSON.stringify(itemsArray))
          })
      })
}
      


//Código DOM #5:

// Permite que la acción guardar el nuevo nombre de la tarea cuando decides editar y que impacte el DOM del HTML, acá debes agegar algoritmo de actualizar tarea

function activateSaveListeners() {
  const saveBtn = document.querySelectorAll('.saveBtn')
  const inputs = document.querySelectorAll('.input-controller textarea')
  saveBtn.forEach((sB, i) => {
    sB.addEventListener('click', () => {
      // Llamar la función que guarda la actualización la tarea
      const updateValue = inputs[i].value;
      ActualizarTarea(i, updateValue);
    })
  })
}

//código DOM #6:_

// Esta es la lógica para el botón "cancelar" cuando presionas editar una tarea, inserta este código tal cual, el reto está en saber en qué parte de tu código debes usarlo.

function activateCancelListeners() {
  const cancelBtn = document.querySelectorAll('.cancelBtn')
  const updateController = document.querySelectorAll('.update-controller')
  const inputs = document.querySelectorAll('.input-controller textarea')
  cancelBtn.forEach((cB, i) => {
    cB.addEventListener('click', () => {
      updateController[i].style.display = 'none'
      inputs[i].disabled = true
      inputs[i].style.border = 'none'
      location.reload()
    })
  })
}

displayFooter()
displayItems()