import React from 'react'
import Accordion from './Accordion'

export default function News() {
  return (
    <div>
      <Accordion>
                <Accordion.Header>Тут должен быть fetch запрос с выводом темы новостей</Accordion.Header> 
                <Accordion.Content>Тут должен быть fetch запрос с выводом самой новости</Accordion.Content>
            </Accordion>
    </div>
  )
}
