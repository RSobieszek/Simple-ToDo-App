import React from 'react'
import { connect } from 'react-redux'
import { delTodo, toggleTodo } from '../actions/todosActions'

import Todo from './Todo'

class TodoList extends React.Component {

    delTodo = (id) => {
        this.props.dispatch(delTodo(id))
    }

    toggleTodo = (id) => {
        this.props.dispatch(toggleTodo(id))
    }

    render() {
        const { todos } = this.props.todoList

        const todoList = todos.map(todo => (
            <Todo
                key={todo.id}
                todo={todo}
                delTodo={this.delTodo}
                toggleTodo={this.toggleTodo} />
        ))

        return (
            <div className="container">{todoList}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todoList: state
    }
}

export default connect(mapStateToProps)(TodoList)