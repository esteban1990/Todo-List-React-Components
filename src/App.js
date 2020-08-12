import React from 'react';
import TodoItem from "./components/todoItem";
import TodoInput from "./components/todoInput";


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todos:[
        {id:0, text:"make your bed"},
        {id:1, text:"make your bed"},
        {id:2, text:"make your bed"}
      ],
      nextId:3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

    addTodo(todoText){
      let todos = this.state.todos.slice();
      todos.push({id: this.state.nextId, text:todoText})
      this.setState({
        todos:todos,
        nextId: ++this.state.nextId
      })
    }

    removeTodo(id){
      this.setState({
        todos: this.state.todos.filter((todo,index)=>todo.id != id)
      })
    }

    
    render(){
      return(
        <div className="Wrapper">
          <div className="todo-wrapper">
            <div className="card">
              <div className="card-header">
                <h1>Todo Components</h1>
                <TodoInput todoText="" addTodo={this.addTodo}/>
                <ul>
                  {
                    this.state.todos.map((todo)=>{
                      return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                    })
                  }
    
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }

  }


 

export default App;
