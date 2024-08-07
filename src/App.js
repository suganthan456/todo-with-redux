import {useState} from 'react';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './redux/todoapp/actions';

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state)=>state.operationsReducer);

  const [isUpdateTodo, setIsUpdateTodo]=useState(false);

  
  const [editTodo, setEditTodo]=useState('');

  
  const handleEditClick=(todo)=>{
    setIsUpdateTodo(true);
    setEditTodo(todo);
  }

  const cancelUpdate=()=>{
    setIsUpdateTodo(false);
  }

    return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form isUpdateTodo={isUpdateTodo} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} isUpdateTodo={isUpdateTodo}/>
      {todos.length > 1 && (
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App;
