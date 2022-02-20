import React, { useEffect, useState } from 'react'
import "./Modal.css"
import {MdOutlineClose} from "react-icons/md"
import Button from '../button/Button'
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../redux/todoSlice';
import { toast } from 'react-hot-toast';


export default function Modal({type, modalOpen, setModalOpen, todo}) {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState ("incomplete")
    const dispatch = useDispatch();

    useEffect(()=>{
        if (type === "update"){
            setTitle(todo.title);
            setStatus(todo.status);
        } else {
            setTitle("");
            setStatus("incomplete")
        }
    }, [type, todo, modalOpen])

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (title === ""){
            toast.error("Title shouldn't be empty");
            return;
        }
        if(title && status){
            if(type === "add"){
                dispatch(addTodo({
                    id: Date.now(),
                    title,
                    status,
                    time: new Date().toLocaleString()
                }))
                toast.success("Task added");
                setModalOpen(false);
            }
        }
        if (type === "update"){
            console.log(todo)
            if( todo.title !== title || todo.status !== status){
                dispatch(updateTodo({
                    ...todo,
                    title,
                    status,
                }));
                setModalOpen(false);
            } else {
                toast.error("No change todo")
            }
        }
        }
  return (
      modalOpen && (
          <div className="wrapper">
          <div className='containerMod'>
          <div className='closeButton'
            onClick={()=>setModalOpen(false)}
            onKeyDown={()=>setModalOpen(false)}
            role="button"
            tabIndex={0}
           >
              <MdOutlineClose/>
          </div>
          <form className='form' onSubmit={(e)=> handleSubmit(e)}>
              <h1 className='formtTitle'>{type === "update" ? "Update" : "Add"} task</h1>
              <label htmlFor='title'>Title
                  <input 
                  type="text" 
                  id='title' 
                  value={title} 
                  onChange={(e)=> setTitle(e.target.value)}></input>
              </label>
              <label htmlFor='status'>
                  Status
                  <select name='status' id='status' value={status} onChange={(e)=> setStatus(e.target.value)}>
                      <option value="incomplete">Incomplete</option>
                      <option value="complete">Complete</option>
                  </select>
              </label>
              <div className='buttonContainer'>
                  <Button 
                  typeButton="submit"
                  variant='button--primary'>{type === "update" ? "Update" : "Add"} task</Button>
                  <Button
                  onClick={()=>setModalOpen(false)}
                  onKeyDown={()=>setModalOpen(false)}
                  typeButton="button"
                  variant='button--secondary'>Cancel</Button>
              </div>
          </form>
          </div>
      </div>
      )
  )
}
