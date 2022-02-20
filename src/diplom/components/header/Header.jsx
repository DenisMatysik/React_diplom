import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../button/Button'
import '../button/Button.css'
import Modal from '../modal/Modal'
import { uptadeFilterStatus } from '../redux/todoSlice'
import "./Header.css"

export default function Header() {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const updateFilter = (e)=>{
      console.log(e.target.value)
      dispatch(uptadeFilterStatus(e.target.value))
    }
  return (
    <div className='headerNav'>
        <div className='appHeader'>
        <Button onClick={()=>setModalOpen(true)} typeButton="submit" variant='button--primary'>Add task</Button>
        <Button typeButton="button" variant='button--all' value="all" onClick={updateFilter}>All task</Button>
        <Button typeButton="button" variant='button--all' value="complete" onClick={updateFilter}>Complelte task</Button>
        <Button typeButton="button" variant='button--all' value="incomplete" onClick={updateFilter}>Incomplelte task</Button>

        </div>
        <Modal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}
