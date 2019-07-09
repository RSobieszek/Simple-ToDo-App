const initState = {
    todos: [
        { id: 1, todo: 'Add more todos', isCompleted: false },
        { id: 2, todo: 'Remove some todos', isCompleted: false },
        { id: 3, todo: 'Learn Redux', isCompleted: true },
        { id: 4, todo: 'Learn React Router', isCompleted: true },
        { id: 5, todo: 'Add Materialize', isCompleted: true },
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let newTodo = {
                id: action.id,
                todo: action.todo,
                isCompleted: false
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case 'DEL_TODO':
            let newTodos = state.todos.filter(todo => todo.id !== action.id)

            return {
                ...state,
                todos: [...newTodos]
            }
        case 'TOGGLE_TODO':
            let toggledTodos = state.todos.map(todo => {
                return (todo.id === action.id)
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            })
            return {
                ...state,
                todos: [...toggledTodos]
            }
        default:
            return state
    }
}

export default rootReducer