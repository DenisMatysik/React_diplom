import {React,useEffect,useState} from 'react'
import { MdDelete, MdEdit, MdDone } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import "./TodoItem.css"
import { deleteTodo, updateTodo } from '../redux/todoSlice'
import Modal from '../modal/Modal'

export default function TodoItem({todo}) {
const [updateModalOpen, setUpdateModalOpen] = useState(false);
const [doneTodo, setDoneTodo]= useState(false);

useEffect(()=>{
    if (todo.status === "complete"){
        setDoneTodo(true);
    } else {
        setDoneTodo(false)
    }
}, [todo.status]);

const dispatch = useDispatch();
const deleteTask =()=>{
    dispatch(deleteTodo(todo.id));
}
const editTodo =()=>{
    setUpdateModalOpen(true);
}
const doneTask=()=>{
    setDoneTodo(!doneTodo);
    dispatch(updateTodo({
        ...todo,
        status: doneTodo ? "incomplete" : "complete"
    }));
}
  return (
      <>
    <div className={"item"+" "+todo.status+"d"}>
        <div className='todoDetails'>
        <div className='icon'
            onClick={doneTask}
            role="button"
            tabIndex={0}>
                <MdDone/>
                </div>
            <div className='text'>
                <p className={"todoText" +" "+ todo.status}>{todo.title}</p>
                <p className="time">{todo.time}</p>
            </div>
        </div>
        <div className='todoActions'>
            <div className='icon'
            onClick={editTodo}
            role="button"
            tabIndex={0}>
                <MdEdit/>
                </div>
            <div className='icon'
            onClick={deleteTask}
            role="button"
            tabIndex={0}>
                <MdDelete/>
            </div>
        </div>
    </div>
    <Modal type="update"
    todo={todo}
    modalOpen={updateModalOpen} 
    setModalOpen={setUpdateModalOpen}/>
    </>
  )
}
