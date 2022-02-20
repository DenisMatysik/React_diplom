import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../todoItem/TodoItem';
import "./Content.css"

export default function Content() {
  const todoList = useSelector(state=> state.todo.todoList);
  const filterStatus = useSelector(state=> state.todo.filterStatus);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a,b)=> new Date(b.time) - new Date(a.time))

  const filteredTodoList = sortedTodoList.filter(item=> {
    if(filterStatus === "all"){
      return true;
    }
    return item.status === filterStatus;
  })

  return (
    <div>{filteredTodoList && filteredTodoList.length>0 ? (filteredTodoList.map((todo)=> <TodoItem key={todo.id} todo={todo}/>)) : <div className='emptyTodoList'>No {filterStatus} todo</div>}</div>
  )
}
