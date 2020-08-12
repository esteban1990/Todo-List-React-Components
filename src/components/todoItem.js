import React from "react";


class TodoItem extends React.Component{
    constructor(props){
        super(props);
    }



    removeTodo(id){
        this.props.removeTodo(id);
    }

    render(){
        return(

            <div className="todo-wrapper">
                <button className="btn btn-primary" onClick={(e)=>this.removeTodo(this.props.id)}>Borrar Tarea</button>{this.props.todo.text}
            </div>
        )
    }
}

export default TodoItem;