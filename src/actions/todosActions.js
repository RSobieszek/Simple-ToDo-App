let nextId = 50

export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    id: nextId++,
    todo
})

export const delTodo = (id) => ({
    type: 'DEL_TODO',
    id
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})