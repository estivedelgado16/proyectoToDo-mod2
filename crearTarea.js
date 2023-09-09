function crearTarea(item) {
    const nuevaTarea = {
        thing: item.value,
        checked: false,
        disabled: true,
        priority: 'Alta',
        category: 'Casa',
    }
    itemsArray.push(nuevaTarea)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()
}

document.querySelector('.new-todo').addEventListener('keyup', (event) => {
    if (
        event.keyCode === 13 &&
        document.querySelector('.new-todo').value.length > 0
    ) {
        const item = document.querySelector('.new-todo')
            //Llamar la función que crea la tarea.**
        crearTarea(item);
    }
})