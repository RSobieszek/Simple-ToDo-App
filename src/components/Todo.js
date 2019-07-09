import React from 'react'

const Todo = (props) => {

    const { id, todo, isCompleted } = props.todo

    const handleClick = (btnId, id) => {
        switch (btnId) {
            case 'delete':
                props.delTodo(id)
                break;
            case 'todoText':
                props.toggleTodo(id)
                break;
            default:
                break;
        }
    }

    return (
        <div className="row valign-wrapper">
            <div
                id="todoText"
                className="col s10"
                onClick={(e) => handleClick(e.target.id, id)}
                style={isCompleted ? { textDecorationLine: 'line-through', color: 'grey', cursor: 'pointer' } : { cursor: 'pointer' }}>
                {todo}
            </div>
            <div className="col s2">
                <button
                    id="delete"
                    className="btn-floating btn-small deep-orange darken-2"
                    onClick={(e) => handleClick(e.currentTarget.id, id)}>
                    <i className="material-icons">close</i>
                </button>
            </div>
        </div>
    )
}

export default Todo
