

function displayFooter() {
  let page = `      
    
      <footer class="footer">
      
        <span class="todo-count"><strong>${countPend()}</strong> pendiente(s)</span>
        
        <ul class="filters">
          <li>
            <a onclick="mostrarTodos()" class="selected filtro" href="#/">Todos</a>
          </li>
          <li>
            <a onclick="mostrarPendientes()" class="filtro" href="#/active">Pendientes</a>
          </li>
          <li>
            <a onclick="mostrarComp()" class="filtro" href="#/completed">Completados</a>
          </li>
        </ul>
        <button onclick="borrarComp()" id="clear-completed" class="clear-completed">Borrar completados</button>
      </footer>
    `
  document.querySelector('.footer').innerHTML = page
  
}

