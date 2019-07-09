import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todosActions'

import TodoList from './TodoList';

class Home extends React.Component {

    state = {
        todo: ''
    }

    handleChange = (e) => {
        this.setState({ todo: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(addTodo(this.state.todo))
        this.setState({ todo: '' })
    }

    render() {
        return (
            <div className="container main-list">
                <div className="row">
                    <div className="col s12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-field col m8 s12">
                                <input
                                    id="todo"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.todo} />
                                <label htmlFor="todo">Todo</label>
                            </div>
                            <div className="input-field col m4 s12">
                                <button
                                    className="btn l light-green darken-1"
                                    type="submit"
                                    disabled={!this.state.todo}
                                    >Add Todo
                                    <i className="material-icons left">add</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <TodoList />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Home)