import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../button/Button'
import '../button/Button.scss'
import Modal from '../modal/Modal'
import { uptadeFilterStatus } from '../../store/todoSlice'
import "./Header.css"

export default function Header() {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const updateFilter = (e)=>{
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
